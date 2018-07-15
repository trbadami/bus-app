# Bus-App Notes and Assumptions

## Notes

I have used Angular Material for UI. I could have used Bootstrap as I am equally good in that.

I have created 2 services and placed in services folder. One is pure HttpClient service that returns data. Other is kind of business layer that reads the data and maps it to model while processing data. This approach makes code properly testable. 

Created separate methods to work with RouteVariant and DeviationFromTimeTable. Written test cases for all possible scenarios.

To make UI pretty, I have used Angular Material Expansion Panel, Data Table, Form fields and Toolbar. I have also implemented sorting on Bus ID and Status.

I feel that UI test cases are not required for this test and that is why I have not written code for UI testing.

Notes are not saved in any repository but I have shown in an alert to demonstrate that it is available to be saved.

## Assumptions

Following in my assumptions for Deviation from time table by looking at the data and UI:

- No data available, it is Unknow and I have choosen gray color.
- If it is less than 0, it is Early and blue color is choosen.
- If it is greater than 300, it is late and I have used Red color for that.
- Otherwise (between 0 and less than 300), it is On Time and my preferred color is Green for that.
