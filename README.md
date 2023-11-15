# A smart printing service for students at HCMUT
The university is intent to build a Student Smart Printing Service (HCMUT_SSPS) for serving
students in its campuses to print their documents.

The system consists of some printers around the campuses. Each printer has ID,
brand/manufacturer name, printer model, short description, and the location (campus name,
building name, and room number).

The system allows a student to print a document by uploading a document file onto the system,
choose a printer, and specifying the printing properties such as paper size, pages (of the file) to
be printed, one-/double-sided, number of copies, etc. The permitted file types are limitted and
configured by the Student Printing Service Officer (SPSO).

The system has to log the printing actions for all students, including student ID, printer ID, file
name, printing start and end time, number of pages for each page size.

The system allows the SPSO to view the printing history (log) of all students or a student for a
time period (date to date) and for all or some printers. Of course, a student can also view his/her
printing log for a time period together with a summary of number of printed pages for each
page size.

For each semester, the university give each student a default number of A4-size pages for
printing. Students are allowed to buy some more using the feature Buy Printing Pages of the
system and pay the amount through some online payment system like the BKPay system of the
university. The system only allow a student to print some number of pages when it does not
exeed his/her account (page) balance. Note that, one A3 page is equivalent to two A4 pages.
The SPSO has a feature to manage printers such as add/enable/disable a printer.

The SPSO also has a feature to manage other configuration of the system such as changing the
default number of pages, the dates that the system will give the default number of pages to all
students, the permitted file types accepted by the system.
The reports of the using of the printing system are generated automatically at the end of each
month and each year and are stored in the system, and can be viewed by the SPSO anytime.
All users have to be authenticated by the HCMUT_SSO authentication service before using the
system.
The system is provided through a web-based app or a mobile app.
