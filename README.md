| №  | Name                                                                                 | Data                                                                    |
|----|--------------------------------------------------------------------------------------|-------------------------------------------------------------------------|
| 1  | Successful order change with correct ID should receive code 200                      | 10                                                                      |
| 2  | Unsuccessful order change with incorrect ID length should receive code 400           | 101010                                                                  |
| 3  | Unsuccessful order change with incorrect ID with string data should receive code 400 | ggggg                                                                   |
| 4  | Successful order delete with correct ID should receive code 204                      | 8                                                                       |
| 5  | Unsuccessful order delete with incorrect ID should receive code 400                  | 101010                                                                  |
| 6  | Successful order data request with correct ID should receive code 200                | 10                                                                      |
| 7  | Unsuccessful order data request with incorrect ID should receive code 400            | 101010                                                                  |
| 8  | Unsuccessful loan risk score calculation with empty data                             | income:,debt:,age:,employed:true,loanAmount:,loanPeriod:                 |
| 9  | Successful loan low risk score calculation                                           | income:10000,debt:50,age:30,employed:true,loanAmount:10000,loanPeriod:18 |
| 10 | Successful loan medium risk score calculation                                        | income:10000,debt:50,age:25,employed:true,loanAmount:10000,loanPeriod:9  |
| 11 | Successful loan high risk score calculation                                          | income:10000,debt:100,age:20,employed:true,loanAmount:1000,loanPeriod:3  |

