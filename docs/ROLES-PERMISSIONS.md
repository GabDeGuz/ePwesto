# Roles and Permission Boundary

The confirmed user categories are Market Administrator, Registered Vendor, and
Stall Applicant. Their detailed permissions, account lifecycle, multi-role
rules, and identity assurance remain **TBD / Requires Human Decision**.

Regardless of later permission detail, only a Market Administrator may make an
application approval, document verification, or stall-assignment decision. An
administrator may record an official manual raffle/auction winner after the LGU
process, but ePwesto must not select the winner.

Future authorization work must enforce permissions on Laravel’s server boundary,
not merely hide client controls. Update this document, requirements, tests, and
the decision register together when a human-approved permission decision is made.
