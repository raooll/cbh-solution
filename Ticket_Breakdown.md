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

### Ticket 1
    Parent: Main ticket.
    Description:  Agent model can have custom_agent_id provided by the facilities. We need to update Agents table schema and add custom_agent_id field. This field will store the custom_agent_id provided by the facilites. Let's create a new migration fullfilling the below mentioned requirements.
    Estimate: .5 day
    Requirements: 
        1. Add custom_agent_id field of type string max length 256 characters.
        2. Add unique index on custom_agent_id.
        3. custom_agent_id can be null.
        4. Update the Agents model discription and add this field.
        5. Update the Agents model unit tests and add testcases and checks for custom_agent_id field.
        6. Update Model mocks to accomodate custom_agent_id.

### Ticket 2
    Parent: Main ticket.
    Description: Agent model can have custom_agent_id provided by the facilities. We need update the Agents api to allow updates to custom_agent_id field in the Agents table.
    Estimate: .5 day
    Requirements:
        1. custom_agent_id is of type string, can have a max length of 256 characters and should we validated as such. custom_agent_id can be null in the database.
        2. Alter the create agent api to accept custom_agent_id as one of the optional parameters. custom_agent_id should be validated as per requirement 1.
        3. Alter the update agent api to accept the custom_agent_id as of the optional parameters. custom_agent_id should be validated as per requirement 1.
        4. Alter the agents api responses to return custom_agent_id.
        5. Update the e2e test cases for agents api to accomodate custom_agent_id.

### Ticket 3.
    Parent: Main ticket.
    Description:  Agent model can have custom_agent_id provided by the facilities. We need update the Agents dashboard to allow updates to custom_agent_id field in the Agents table.
    Estimate: .5 day
    Requirements:
        1. custom_agent_id is of type string, can have a max length of 256 characters and should we validated as such. custom_agent_id can be null in the database.
        2. Alter the create agent page to accept custom_agent_id as one of the optional parameters. custom_agent_id should be validated as per requirement 1.
        3. Alter the update agent page to accept the custom_agent_id as of the optional parameters. custom_agent_id should be validated as per requirement 1.
        4. Alter the agents list page to show custom_agent_id column on the UI.
        5. Alter the agent show page to display custom_agent_id in the agent details page.
        5. Update the  test cases for agents pages to accomodate custom_agent_id.

### Ticket 4
    Parent: Main ticket.
    Description:  Agent model can have custom_agent_id provided by the facilities ( custom_agent_id is of type string, can have a max length of 256 characters and should we validated as such. custom_agent_id can be null in the database). We need to update quaterly facilities shift reports to display custom_agent_id for Agent (if it exists) along side our internal id. This report is generated using our "getShiftsByFacility" and "generateReport" functions. 
    Estimate: .5 day
    Requirements: 
        1. Update "getShiftsByFacility" to return custom_agent_id for the Agents assigned to each task.
        2. Update the "generateReport" to include the custom_agent_id into the PDF report. Please check with the design team for design changes.
        3. Update the unit tests both these functions and add tests to accomodate this change.
        4. Update automation tests for report endpoint to include these changes.

       