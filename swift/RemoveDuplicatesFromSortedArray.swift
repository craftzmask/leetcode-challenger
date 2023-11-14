class RemoveDuplicatesFromSortedArray {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var left = 0
        for num in nums {
          if num != nums[left] {
            nums[left + 1] = num
            left += 1
          }
        }
        return left + 1
    }
}