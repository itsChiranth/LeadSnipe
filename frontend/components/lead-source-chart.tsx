"use client"

import { useEffect, useRef } from "react"

export function LeadSourceChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Mock data
    const sources = [
      { name: "Website", value: 35, color: "#3b82f6" },
      { name: "Referral", value: 25, color: "#10b981" },
      { name: "Social Media", value: 20, color: "#f59e0b" },
      { name: "Email", value: 15, color: "#8b5cf6" },
      { name: "Other", value: 5, color: "#94a3b8" },
    ]

    // Chart dimensions
    const width = ctx.canvas.width
    const height = ctx.canvas.height
    const centerX = width / 2
    const centerY = height / 2
    const radius = Math.min(centerX, centerY) - 40

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Calculate total
    const total = sources.reduce((sum, source) => sum + source.value, 0)

    // Draw pie chart
    let startAngle = 0
    sources.forEach((source) => {
      const sliceAngle = (2 * Math.PI * source.value) / total

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.arc(centerX, centerY, radius, startAngle, startAngle + sliceAngle)
      ctx.closePath()

      ctx.fillStyle = source.color
      ctx.fill()

      startAngle += sliceAngle
    })

    // Draw legend
    const legendX = 20
    let legendY = height - 120

    sources.forEach((source) => {
      ctx.fillStyle = source.color
      ctx.fillRect(legendX, legendY, 15, 15)

      ctx.fillStyle = "#64748b"
      ctx.font = "12px sans-serif"
      ctx.textAlign = "left"
      ctx.fillText(`${source.name} (${source.value}%)`, legendX + 20, legendY + 12)

      legendY += 25
    })
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={500} height={300} className="w-full h-full" />
    </div>
  )
}
