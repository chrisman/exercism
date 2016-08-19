package leap

const testVersion = 2

func IsLeapYear(year int) bool {
        return (year % 400 == 0 || !(year % 100 == 0)) && year % 4 == 0;
}
