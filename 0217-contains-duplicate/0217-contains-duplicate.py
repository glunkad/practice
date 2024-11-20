class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        # TC : O(n^2)
        # for n1 in nums:
        #     for n2 in nums:
        #         if n1 == n2:
        #             return True
        # return False
        # nums.sort()
        # for i in range(0,nums.len() - 1):
        #     if(nums[i] == nums[i+1]):
        #         return True
        # return False
        # TC : O(n)
        seen = set()
        for num in nums:
            if num not in seen:
                seen.add(num)
            else:
                return True
        return False
        