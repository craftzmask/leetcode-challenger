<?php

class Solution {

  /**
   * @param Integer[] $nums1
   * @param Integer $m
   * @param Integer[] $nums2
   * @param Integer $n
   * @return NULL
   */
  function merge(&$nums1, $m, $nums2, $n) {
      $p = $m + $n - 1;
      $m--;
      $n--;

      while ($n >= 0) {
          if ($m >= 0 && $nums1[$m] > $nums2[$n]) {
              $nums1[$p--] = $nums1[$m--];
          } else {
              $nums1[$p--] = $nums2[$n--];
          }
      }
  }
}