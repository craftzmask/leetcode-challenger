class KidsWithTheGreatestNumberOfCandies:
    def kidsWithCandies(self, candies: List[int], extraCandies: int) -> List[bool]:
        most_candies = max(candies)
        return [candy + extraCandies >= most_candies for candy in candies]
