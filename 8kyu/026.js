// Find the smallest integer in the array


class SmallestIntegerFinder {
    findSmallestInt(args) {
      return args.sort(function(a,b) {
        return a- b
      })[0]
    }
  }