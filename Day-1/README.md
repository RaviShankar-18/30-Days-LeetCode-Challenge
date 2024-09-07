Learnings from Day 1 (Two Sum):
Brute Force Approach:
I solved the problem by checking all pairs of numbers using two nested loops. This leads to a time complexity of O(n²) as we iterate through every possible pair in the array.

Optimization:
Since the problem guarantees a unique solution, I added a break statement to stop further iterations once the pair is found. This avoids unnecessary comparisons and slightly improves efficiency in some cases.

Takeaway:
The brute-force approach works for smaller inputs, but it's inefficient for larger arrays due to its O(n²) time complexity. However, the solution uses constant extra space, making its space complexity O(1).
