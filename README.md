# README

## PURPOSE
This F5 iRule LX is designed to read an XML return string from a store procedure/lookup where the username is the search parameter.  The response from the query is in the format of "username@email.com,0,0" or such.  Where the trailing "0,0" incorporates additional user parameters such as "administrator" or "account locked" status.  The F5 APM then reads these values as provided by the ILX and applies the necessary branch-rule accordingly.

Current usecase is an HTTP user look-up with username provided at the F5 APM login page to retrieve an e-mail address for use in an OTP (One-Time-Password) F5 APM policy.  The user store is NOT LDAP/AD which would make this a one-click method in APM if it were.

Don't use this if you have AD.  Please.  Use this when you have no other way to retrieve user info.
