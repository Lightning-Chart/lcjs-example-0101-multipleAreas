# Multiple areas

This demo application belongs to the set of examples for LightningChart JS, data visualization library for JavaScript.

LightningChart JS is entirely GPU accelerated and performance optimized charting library for presenting massive amounts of data. It offers an easy way of creating sophisticated and interactive charts and adding them to your website or web application.

The demo can be used as an example or a seed project. Local execution requires the following steps:

- Make sure that relevant version of [Node.js](https://nodejs.org/en/download/) is installed
- Open the project folder in a terminal:

        npm install              # fetches dependencies
        npm start                # builds an application and starts the development server

- The application is available at *http://localhost:8080* in your browser, webpack-dev-server provides hot reload functionality.

### Description 

*Also known as a Area Graph or Area Chart*

The example shows the basic usage of a monopolar area series. The area series is based on ***line series*** with the area between the baseline and the given data filled with color. It is drawn on a Cartesian coordinate system and represents the quantitative data.

Current example chart contains two monopolar area series. They are drawn on different sides of the specified baseline and the selected area type specifies the direction. The first area has a positive direction, the second one has a negative direction.

The simple area chart can be created with few simple lines of code:

```javascript
// Create a new ChartXY.
const chart = lightningChart().ChartXY()

// Add an area series with positive direction using default X and Y axes.
const areaPositive = chart.addAreaSeries( { baseline: 0, type: AreaSeriesTypes.Positive } )

// Add an area series with negative direction using default X and Y axes.
const areaNegative = chart.addAreaSeries( { baseline: 0, type: AreaSeriesTypes.Negative } )
```

The baseline value the type of number and the type can be specified only during the creation of a series instance, where

- The baseline is a fixed reference level of minimum or starting point used for comparisons, which allow customizing the position of the area.

- The type of area series is an enum selector which defines the type of area series:
    - Select AreaSeriesTypes.Positive to show the data only above the baseline.
    - Select AreaSeriesTypes.Negative to show the data only below the baseline.
    - Select AreaSeriesTypes.Both to show the data from both sides of the baseline. *Bipolar area series will be explained in the future example*.

The series accepts points in format `{ x: number, y: number }`. Any number of points can be added with a single call.

```javascript
// Single point.
series.add({ x: 50, y: 60 })

// Multiple points at once.
series.add([
    { x: 55, y: 60 },
    { x: 60, y: 62},
    { x: 65, y: 65}
])
```

### API links

* XY cartesian chart: [ChartXY][]
* Area series: [AreaSeries][]
* Area type: [AreaSeriesTypes][]
* Positive Area series: [AreaSeriesPositive][]
* Negative Area series: [AreaSeriesNegative][]
* Color palettes: [ColorPalettes][]


### Support

If you notice an error in the example code, please open an issue on [GitHub][0] repository of the entire example.

Official [API documentation][1] can be found on [Arction][2] website.

If the docs and other materials do not solve your problem as well as implementation help is needed, ask on [StackOverflow][3] (tagged lightningchart).

If you think you found a bug in the LightningChart JavaScript library, please contact support@arction.com.

Direct developer email support can be purchased through a [Support Plan][4] or by contacting sales@arction.com.

© Arction Ltd 2009-2019. All rights reserved.

[0]: https://github.com/Arction/
[1]: https://www.arction.com/lightningchart-js-api-documentation/
[2]: https://www.arction.com
[3]: https://stackoverflow.com/questions/tagged/lightningchart
[4]: https://www.arction.com/support-services/

[AreaSeries]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/chartxy.html#addareaseries
[AreaSeriesNegative]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/areaseriesnegative.html
[AreaSeriesPositive]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/areaseriespositive.html
[AreaSeriesTypes]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/globals.html#areaseriestypes
[ChartXY]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/classes/chartxy.html
[ColorPalettes]: https://www.arction.com/lightningchart-js-api-documentation/v1.0.0/globals.html#colorpalettes