
# Short Description

Hi there. I decided to write the autotests for [Pecode's Login page](https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php) using the `CYPRESS` framework. 
Generally, the mentioned tool works well with the `mochawesome-reporter`. The `CYPRESS` allows us to set the required options of our reporter without any problems at all.
The same thing applies to screenshots and recorded videos. Everything can be configured if needed.
After using the `CYPRESS`, probably i would never use the `WDIO` again. I'll provide the comparison table at the end of this `README`, and you will understand everything by yourself.  

## Requirements
You need to have one of the following browsers installed on your system:
- `Google Chrome v64` or above
- `Edge v79` or above
- `Firefox v86` or above.


## Installation

Install the `npm` package before running the tests:

```bash
  1. npm install
```

## Running Tests

To run tests, run the following command:

```bash
  1. npm run test:LoginPage
```
Expectations:

```bash
▶️ 22 tests should be runned
✔️ 21 tests should be passed
❌ 1 test should fail ("User is redirected to the 'Dashboard' page")
```

## CYPRESS vs WDIO | Comparison table

| Option                                                | CYPRESS | WDIO |
| :-----------------------------------------------------|:------- | :----|
| Simple configuration of screenshots & videos          |✔️      |❌    |
| Easy connection of third-party reporters              |✔️      |❌    |
| Supports the latest versions of connected packages    |✔️      |❌    |
| Provides User-Interface                               |✔️      |❌    |
| Provides detail information about each test is runned |✔️      |❌    |
| Includes the `methods` for API requests               |✔️      |❌    |
| Simple switching between the supported browsers       |✔️      |❌    |
| More informative documentation                        |✔️      |❌    |
| More understandable `methods/assertions`              |❌      |✔️    |

The conlusion is obvious. I will chose the `CYPRESS` in 9 of 10 possible cases in the future.

