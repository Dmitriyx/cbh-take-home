# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Add ID Column to Shifts Table
- estimate: XS
- acceptance criteria: there is a UUID for each row in the Shifts table with column called "Id"
- implementation details: Use the current ORM to generate migration file after updating model to add a column.

### Ticket 2: Ensure new column in Shifts Table is being used from Ticket 1.
- estimate: S
- acceptance criteria: ID is returned from `generateReport` function that gives facility and agent a special id that they share to indicate that they worked together.
- implementation details: ensure SQL query returns ID / or write test to ensure ID returns from function so that it prints on the report
- unknown: how it will affect the look on the actual "print" of the report.
- unknown: where else this data is being used and if "id" will break other parts of the code, most likely not, still good to check.