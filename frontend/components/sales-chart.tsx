"use client"

import { useEffect, useRef } from "react"

export function SalesChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d")
    if (!ctx) return

    // Mock data
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const actualSales = [30000, 35000, 25000, 40000, 50000, 45000, 55000, 60000, 50000, 70000, 65000, 75000]
    const targetSales = [40000, 40000, 40000, 45000, 45000, 45000, 50000, 50000, 50000, 60000, 60000, 60000]

    // Chart dimensions
    const width = ctx.canvas.width
    const height = ctx.canvas.height
    const padding = 40
    const chartWidth = width - 2 * padding
    const chartHeight = height - 2 * padding

    // Clear canvas
    ctx.clearRect(0, 0, width, height)

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Draw grid lines
    const numGridLines = 5
    const gridStep = chartHeight / numGridLines
    const valueStep = Math.max(...actualSales) / numGridLines

    ctx.beginPath()
    ctx.setLineDash([5, 5])
    for (let i = 1; i <= numGridLines; i++) {
      const y = height - padding - i * gridStep
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)

      // Draw y-axis labels
      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`$${Math.round((i * valueStep) / 1000)}k`, padding - 5, y + 3)
    }
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()
    ctx.setLineDash([])

    // Draw x-axis labels
    const barWidth = chartWidth / months.length
    months.forEach((month, i) => {
      const x = padding + i * barWidth + barWidth / 2
      ctx.fillStyle = "#64748b"
      ctx.font = "10px sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(month, x, height - padding + 15)
    })

    // Draw actual sales bars
    actualSales.forEach((value, i) => {
      const barHeight = (value / Math.max(...actualSales)) * chartHeight
      const x = padding + i * barWidth + barWidth * 0.2
      const y = height - padding - barHeight
      const barW = barWidth * 0.3

      ctx.fillStyle = "#3b82f6"
      ctx.fillRect(x, y, barW, barHeight)
    })

    // Draw target sales bars
    targetSales.forEach((value, i) => {
      const barHeight = (value / Math.max(...actualSales)) * chartHeight
      const x = padding + i * barWidth + barWidth * 0.5
      const y = height - padding - barHeight
      const barW = barWidth * 0.3

      ctx.fillStyle = "#94a3b8"
      ctx.fillRect(x, y, barW, barHeight)
    })

    // Draw legend
    const legendX = width - padding - 150
    const legendY = padding + 20

    ctx.fillStyle = "#3b82f6"
    ctx.fillRect(legendX, legendY, 15, 15)
    ctx.fillStyle = "#64748b"
    ctx.font = "12px sans-serif"
    ctx.textAlign = "left"
    ctx.fillText("Actual Sales", legendX + 20, legendY + 12)

    ctx.fillStyle = "#94a3b8"
    ctx.fillRect(legendX, legendY + 25, 15, 15)
    ctx.fillStyle = "#64748b"
    ctx.fillText("Target Sales", legendX + 20, legendY + 37)
  }, [])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full" />
    </div>
  )
}
