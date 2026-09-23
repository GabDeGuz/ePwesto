# Market and applications contract

Responsibility: future section/stall records, applications, and FCFS ordering.
Inputs: applicant request and administrator action. Outputs: section-scoped queue
state and application status. Owned data: sections, stalls, applications, queue
ordering data. Interfaces: approved API/client contracts. Dependencies:
authorization and approved timestamp/tie-break policy. Acceptance boundary:
queues never mix sections and approval remains explicit. Prohibited: automatic
approval or invented FCFS tie breaks.
