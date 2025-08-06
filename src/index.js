/*
 * LightningChart® example code: Demo shows how to draw multiple layered area series.
 *
 * http://lightningchart.com | support@lightningchart.com | sales@lightningchart.com
 * © LightningChart Ltd 2009-2019. All rights reserved.
 */
// Import LightningChartJS
const lcjs = require('@lightningchart/lcjs')

// Extract required parts from LightningChartJS.
const { lightningChart, AreaSeriesTypes, UIElementBuilders, PointShape, Themes } = lcjs

// Create a XY Chart.
const xyChart = lightningChart({
            resourcesBaseUrl: new URL(document.head.baseURI).origin + new URL(document.head.baseURI).pathname + 'resources/',
        })
    .ChartXY({
        theme: Themes[new URLSearchParams(window.location.search).get('theme') || 'darkGold'] || undefined,
    })
    .setTitle('Expected Profits To Expenses')

// ---- Add multiple Area series with different baselines and direction. ----
const areaProfit = xyChart.addAreaSeries({ type: AreaSeriesTypes.Positive }).setName('Profits')

const areaExpense = xyChart.addAreaSeries({ type: AreaSeriesTypes.Negative }).setName('Expenses')

// Set Axis nicely
xyChart.getDefaultAxisX().setTitle('Units Produced')
xyChart.getDefaultAxisY().setTitle('USD')

const profitData = [
    { x: 0, y: 0 },
    { x: 10, y: 21 },
    { x: 20, y: 59 },
    { x: 30, y: 62 },
    { x: 40, y: 78 },
    { x: 50, y: 85 },
    { x: 60, y: 95 },
    { x: 70, y: 98 },
    { x: 80, y: 103 },
    { x: 90, y: 110 },
    { x: 100, y: 112 },
    { x: 110, y: 126 },
    { x: 120, y: 132 },
    { x: 130, y: 170 },
    { x: 140, y: 172 },
    { x: 150, y: 202 },
    { x: 160, y: 228 },
    { x: 170, y: 267 },
    { x: 180, y: 300 },
    { x: 190, y: 310 },
    { x: 200, y: 320 },
    { x: 210, y: 329 },
    { x: 220, y: 336 },
    { x: 230, y: 338 },
    { x: 240, y: 343 },
    { x: 250, y: 352 },
    { x: 260, y: 355 },
    { x: 270, y: 390 },
    { x: 280, y: 392 },
    { x: 290, y: 418 },
    { x: 300, y: 421 },
    { x: 310, y: 430 },
    { x: 320, y: 434 },
    { x: 330, y: 468 },
    { x: 340, y: 472 },
    { x: 350, y: 474 },
    { x: 360, y: 480 },
    { x: 370, y: 506 },
    { x: 380, y: 545 },
    { x: 390, y: 548 },
    { x: 400, y: 552 },
    { x: 410, y: 584 },
    { x: 420, y: 612 },
    { x: 430, y: 619 },
    { x: 440, y: 627 },
    { x: 450, y: 657 },
    { x: 460, y: 669 },
    { x: 470, y: 673 },
    { x: 480, y: 695 },
    { x: 490, y: 702 },
    { x: 500, y: 710 },
]
const expensesData = [
    { x: 0, y: 0 },
    { x: 10, y: -58 },
    { x: 20, y: -61 },
    { x: 30, y: -62 },
    { x: 40, y: -66 },
    { x: 50, y: -88 },
    { x: 60, y: -93 },
    { x: 70, y: -124 },
    { x: 80, y: -126 },
    { x: 90, y: -136 },
    { x: 100, y: -152 },
    { x: 110, y: -156 },
    { x: 120, y: -190 },
    { x: 130, y: -199 },
    { x: 140, y: -200 },
    { x: 150, y: -208 },
    { x: 160, y: -210 },
    { x: 170, y: -235 },
    { x: 180, y: -270 },
    { x: 190, y: -299 },
    { x: 200, y: -321 },
    { x: 210, y: -342 },
    { x: 220, y: -350 },
    { x: 230, y: -360 },
    { x: 240, y: -374 },
    { x: 250, y: -413 },
    { x: 260, y: -433 },
    { x: 270, y: -447 },
    { x: 280, y: -449 },
    { x: 290, y: -454 },
    { x: 300, y: -461 },
    { x: 310, y: -461 },
    { x: 320, y: -492 },
    { x: 330, y: -496 },
    { x: 340, y: -518 },
    { x: 350, y: -522 },
    { x: 360, y: -557 },
    { x: 370, y: -562 },
    { x: 380, y: -596 },
    { x: 390, y: -599 },
    { x: 400, y: -609 },
    { x: 410, y: -611 },
    { x: 420, y: -628 },
    { x: 430, y: -635 },
    { x: 440, y: -636 },
    { x: 450, y: -643 },
    { x: 460, y: -643 },
    { x: 470, y: -647 },
    { x: 480, y: -648 },
    { x: 490, y: -659 },
    { x: 500, y: -665 },
]

// ---- Generate points using 'xydata'-library and add it to every plot. ----
profitData.forEach((point) => {
    areaProfit.appendSample(point)
})
expensesData.forEach((point) => {
    areaExpense.appendSample(point)
})
