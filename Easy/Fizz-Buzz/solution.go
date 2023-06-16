package main

import "fmt"

func fizzBuzz(n int) []string {
	arr := []string{}
	for i := 1; i < n+1; i++ {
		if i%5 == 0 && i%3 == 0 {
			arr = append(arr, "FizzBuzz")
		} else if i%3 == 0 {
			arr = append(arr, "Fizz")
		} else if i%5 == 0 {
			arr = append(arr, "Buzz")
		} else {
			arr = append(arr, fmt.Sprintf("%d", i))
		}
	}
	return arr
}
