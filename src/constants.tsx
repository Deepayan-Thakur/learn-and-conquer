/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSATopic, Resource, Trend, TheorySubject } from './types';

export const DSA_TOPICS: DSATopic[] = [
  {
    pattern: "Two Pointers",
    description: "Iterating through an array with two pointers moving towards or away from each other.",
    videos: [
      { title: "Episode 3 –Master DSA Patterns with 2 Pointers Technique", url: "https://www.youtube.com/watch?v=Fu7LD_mIo00&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=3", type: "video", platform: "Padho with Pratyush" },
      { title: "Episode - 4 | Master DSA Patterns with the 2 Pointer Technique", url: "https://www.youtube.com/watch?v=PvyEr3CeKzE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=4", type: "video", platform: "Padho with Pratyush" },
      { title: "Episode 5 - 2 Pointer DSA Pattern | DSA PATTERNS ROADMAP 2025", url: "https://www.youtube.com/watch?v=nPdxCoVHC90&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=5", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA Patterns Episode 6 - What If You Could Master Time Complexity in Just 30 Minutes?", url: "https://www.youtube.com/watch?v=oFwHwCkSoGw&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=6", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA Patterns Episode 7: Two Pointers Pattern: More Interview Questions", url: "https://www.youtube.com/watch?v=rM9EthMlXnw&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=7", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 8 | Two Pointers Pattern: Most Important Questions", url: "https://www.youtube.com/watch?v=ljJJcYql6Bc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=8", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PAtterns Episode 9 | Two Pointers Pattern: Complete Revision in One Video", url: "https://www.youtube.com/watch?v=n7v0SokbF4I&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=9", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Pair with Target Sum (easy)", links: ["https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/description/"] },
      { title: "Rearrange 0 and 1", links: ["https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1"] },
      { title: "Remove Duplicates (easy)", links: ["https://leetcode.com/problems/remove-duplicates-from-sorted-list/", "https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/", "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/"] },
      { title: "Squaring a Sorted Array (easy)", links: ["https://leetcode.com/problems/squares-of-a-sorted-array/"] },
      { title: "Triplet Sum to Zero (medium)", links: ["https://leetcode.com/problems/3sum/"] },
      { title: "Triplet Sum Close to Target (medium)", links: ["https://leetcode.com/problems/3sum-closest/"] },
      { title: "Triplets with Smaller Sum (medium)", links: ["https://www.geeksforgeeks.org/problems/count-triplets-with-sum-smaller-than-x5549/1"] },
      { title: "Subarrays with Product Less than a Target (medium)", links: ["https://leetcode.com/problems/subarray-product-less-than-k/"] },
      { title: "Dutch National Flag Problem (medium)", links: ["https://leetcode.com/problems/sort-colors/description/"] },
      { title: "Quadruple Sum to Target (medium)", links: ["https://leetcode.com/problems/4sum/"] },
      { title: "Comparing Strings containing Backspaces (medium)", links: ["https://leetcode.com/problems/backspace-string-compare/"] },
      { title: "Minimum Window Sort (medium)", links: ["https://leetcode.com/problems/shortest-unsorted-continuous-subarray/", "https://www.ideserve.co.in/learn/minimum-length-subarray-sorting-which-results-in-sorted-array"] }
    ]
  },
  {
    pattern: "Sliding Window",
    description: "Maintaining a sub-array that satisfies certain conditions.",
    videos: [
      { title: "DSA PATTERNS Episode 10 | Introduction to Sliding Window", url: "https://www.youtube.com/watch?v=V6pRTnOZ7Mc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=10", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 11 Sliding Window Pattern: Easy & Medium Questions", url: "https://www.youtube.com/watch?v=DL8LSXUsfWE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=11", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 12 Sliding Window Pattern: Core Interview Questions", url: "https://www.youtube.com/watch?v=v4pIgiBQMh8&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=12", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 13 Sliding Window Pattern: Important Questions", url: "https://www.youtube.com/watch?v=2HZ12B2ZPAQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=13", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 14 Sliding Window Pattern Revision (Part 1)", url: "https://www.youtube.com/watch?v=lyZp-49pdzQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=14", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 15 | Sliding Window Pattern Revision (Part 2)", url: "https://www.youtube.com/watch?v=IR3oL6ltbJ8&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=15", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 16 | Sliding Window Pattern: Amazon Interview Question", url: "https://www.youtube.com/watch?v=9wc8HZH_sh4&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=16", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Maximum Sum Subarray of Size K (easy)", links: ["https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1"] },
      { title: "Smallest Subarray with a given sum (easy)", links: ["https://leetcode.com/problems/minimum-size-subarray-sum/"] },
      { title: "Longest Substring with K Distinct Characters (medium)", links: ["https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1"] },
      { title: "Fruits into Baskets (medium)", links: ["https://leetcode.com/problems/fruit-into-baskets/"] },
      { title: "No-repeat Substring (hard)", links: ["https://leetcode.com/problems/longest-substring-without-repeating-characters/"] },
      { title: "Longest Substring Same Letters after Replacement (hard)", links: ["https://leetcode.com/problems/longest-repeating-character-replacement/"] },
      { title: "Longest Subarray with Ones after Replacement (hard)", links: ["https://leetcode.com/problems/max-consecutive-ones-iii/"] },
      { title: "Minimum size subarray SUM", links: ["https://leetcode.com/problems/minimum-size-subarray-sum/"] },
      { title: "MInimum Size Substring (HARD)", links: ["https://leetcode.com/problems/minimum-window-substring/description/?envType=study-plan-v2&envId=top-interview-150"] },
      { title: "Permutation in a String (hard)", links: ["https://leetcode.com/problems/permutation-in-string/"] },
      { title: "String Anagrams (hard)", links: ["https://leetcode.com/problems/find-all-anagrams-in-a-string/"] },
      { title: "Words Concatenation (hard)", links: ["https://leetcode.com/problems/substring-with-concatenation-of-all-words/"] }
    ]
  },
  {
    pattern: "Fast & Slow Pointers",
    description: "Using two pointers at different speeds to detect cycles or find middle elements.",
    videos: [
      { title: "DSA PATTERNS Episode 17 | Linked List Slow & Fast Pointer Technique: Introduction", url: "https://www.youtube.com/watch?v=IxxlDYwMrZ8&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=17", type: "video", platform: "Padho with Pratyush" },
      { title: "My 4 Year DSA Learning JOURNEY | Mistakes | Striver Love Babbar Pepcoding Apna College", url: "https://www.youtube.com/watch?v=7ztFXqo8nZo&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=18", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 18 | Linked List Slow–Fast Pointer: Important Questions", url: "https://www.youtube.com/watch?v=jDP1NkjVjWQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=19", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 19 | Linked List Basics for Beginners", url: "https://www.youtube.com/watch?v=NSh5oNElD84&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=20", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 20 | Linked List Slow–Fast Pointer: Important Questions", url: "https://www.youtube.com/watch?v=RNpZBhZBtJc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=21", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 21 | Linked List Slow–Fast Pointer Complete Revision", url: "https://www.youtube.com/watch?v=ftpI12-e3zs&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=22", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 25 | Linked List Start of Cycle Logic Explained", url: "https://www.youtube.com/watch?v=p8efFVGuqyI&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=27", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "LinkedList Cycle (easy)", links: ["https://leetcode.com/problems/linked-list-cycle/"] },
      { title: "Start of LinkedList Cycle (medium)", links: ["https://leetcode.com/problems/linked-list-cycle-ii/"] },
      { title: "Happy Number (medium)", links: ["https://leetcode.com/problems/happy-number/"] },
      { title: "FIND DUPLICATE NUMBER (medium)", links: ["https://leetcode.com/problems/find-the-duplicate-number/description/"] },
      { title: "Middle of the LinkedList (easy)", links: ["https://leetcode.com/problems/middle-of-the-linked-list/"] },
      { title: "Palindrome LinkedList (medium)", links: ["https://leetcode.com/problems/palindrome-linked-list/"] },
      { title: "Rearrange a LinkedList (medium)", links: ["https://leetcode.com/problems/reorder-list/"] },
      { title: "Cycle in a Circular Array (hard)", links: ["https://leetcode.com/problems/circular-array-loop/"] }
    ]
  },
  {
    pattern: "Kadane Pattern",
    description: "Finding the maximum subarray sum in linear time.",
    videos: [
      { title: "DSA PATTERNS Episode 22 | Kadane’s Algorithm Pattern: Introduction & Intuition", url: "https://www.youtube.com/watch?v=N8vJ8RyQEes&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=23", type: "video", platform: "Padho with Pratyush" },
      { title: "The DSA Revolution Has Started — And People Are Not Happy", url: "https://www.youtube.com/watch?v=EcQN1jziwDo&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=24", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 23 | Kadane’s Algorithm: Most Important Interview Question", url: "https://www.youtube.com/watch?v=JUV-Hdtuzsw&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=25", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 24 | Kadane’s Algorithm Pattern: Quick Revision", url: "https://www.youtube.com/watch?v=Bt9rgQgGf64&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=26", type: "video", platform: "Padho with Pratyush" },
      { title: "Best Explanation Of Kadane One Deletion On The Internet | DSA Pattern Course CPP JAVA", url: "https://www.youtube.com/watch?v=jIz4zcFuUU8&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=48", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Maximum subarray sum", links: ["https://leetcode.com/problems/maximum-subarray/?utm_source=chatgpt.com"] },
      { title: "Minimum Subarray Sum", links: ["https://www.geeksforgeeks.org/problems/smallest-sum-contiguous-subarray/1"] },
      { title: "Maximum product subarray", links: ["https://leetcode.com/problems/maximum-product-subarray/?utm_source=chatgpt.com"] },
      { title: "Maximum subarray sum with one deletion", links: ["https://leetcode.com/problems/maximum-subarray-sum-with-one-deletion/description/"] },
      { title: "Maximum absolute sum of any subarray", links: ["https://leetcode.com/problems/maximum-absolute-sum-of-any-subarray/"] },
      { title: "Maximum sum in circular array variant", links: ["https://leetcode.com/problems/maximum-sum-circular-subarray/?utm_source=chatgpt.com"] }
    ]
  },
  {
    pattern: "Prefix Sum",
    description: "Pre-calculating sums for range queries.",
    videos: [
      { title: "DSA Patterns Course 2025 | Big Announcement | Best Way To Learn DSA in 2025", url: "https://www.youtube.com/watch?v=dQ4amKJuE7I&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=28", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA PATTERNS Episode 26 | Prefix Sum Pattern Introduction | DSA ROADMAP 2025", url: "https://www.youtube.com/watch?v=F86WfZ5RUC8&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=29", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA Patterns Episode 27 | Master DSA Patterns With Prefix Sum | Leetcode Patterns", url: "https://www.youtube.com/watch?v=XLtRoHIDGs0&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=30", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA Patterns Lecture 28 | Master DSA Patterns With Prefix Sum | Interview Questions FAANG", url: "https://www.youtube.com/watch?v=sh0Ng7sjscE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=31", type: "video", platform: "Padho with Pratyush" },
      { title: "Lecture 29 | The ABSOLUTE BEST Prefix Sum Pattern Hacks for Amazon Interviews", url: "https://www.youtube.com/watch?v=EYpv5sypVdE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=32", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA Patterns Lecture 30 | Master Prefix Sum Pattern in 10 Minutes", url: "https://www.youtube.com/watch?v=oZnLzJCOdPA&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=33", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Subarray Sum Equals K (EASY)", links: ["https://leetcode.com/problems/subarray-sum-equals-k/description/"] },
      { title: "Find Pivot Index (EASY)", links: ["https://leetcode.com/problems/find-pivot-index/description/"] },
      { title: "Subarray Sums Divisible By K (Med)", links: ["https://leetcode.com/problems/subarray-sums-divisible-by-k/description/"] },
      { title: "Contiguous array (MED)", links: ["https://leetcode.com/problems/contiguous-array/description/"] },
      { title: "Shortest Subarray With Sum at Least K (HARD)", links: ["https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/description/"] },
      { title: "Count Range Sum (hard)", links: ["https://leetcode.com/problems/count-of-range-sum/description/"] }
    ]
  },
  {
    pattern: "Merge Intervals",
    description: "Dealing with overlapping intervals.",
    videos: [
      { title: "DSA Patterns L31 | Master Merge Interval DSA Patterns | MERGE INTERVALS LEETCODE", url: "https://www.youtube.com/watch?v=aH5aeejuJU8&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=34", type: "video", platform: "Padho with Pratyush" },
      { title: "L32 | Master DSA Pattern Merge Interval | Leetcode Merge Intervals", url: "https://www.youtube.com/watch?v=yAopxaHmRn0&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=35", type: "video", platform: "Padho with Pratyush" },
      { title: "DSA Patterns L33 | Merge Intervals | Master DSA Patterns in 2025", url: "https://www.youtube.com/watch?v=yoh0p_Ag7Q4&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=36", type: "video", platform: "Padho with Pratyush" },
      { title: "L34 DSA Patterns 2025 | Merge Overlapping Intervals | Merge Interval DSA Pattern", url: "https://www.youtube.com/watch?v=b-qtjXsGfqo&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=37", type: "video", platform: "Padho with Pratyush" },
      { title: "35. DSA PATTERNS 2025 | Master Merge Interval With Interview Questions | FAANG", url: "https://www.youtube.com/watch?v=o-ozvzzFpKA&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=38", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Merge Intervals (medium)", links: ["https://leetcode.com/problems/merge-intervals/description/"] },
      { title: "Insert Interval (medium)", links: ["https://leetcode.com/problems/insert-interval/"] },
      { title: "Intervals Intersection (medium)", links: ["https://leetcode.com/problems/interval-list-intersections/description/"] },
      { title: "Overlapping Intervals", links: ["https://www.geeksforgeeks.org/check-if-any-two-intervals-overlap-among-a-given-set-of-intervals/"] },
      { title: "Minimum Meeting Rooms (hard)", links: ["https://www.geeksforgeeks.org/problems/attend-all-meetings-ii/1"] },
      { title: "Maximum CPU Load (hard)", links: ["https://www.geeksforgeeks.org/maximum-cpu-load-from-the-given-list-of-jobs/"] },
      { title: "Employee Free Time (hard)", links: ["https://www.codertrain.co/employee-free-time"] }
    ]
  },
  {
    pattern: "In-place Reversal of LinkedList",
    description: "Reversing link connections without extra space.",
    videos: [
      { title: "Linked List Reversal In the Easiest Way Possible | DSA Patterns Course 2026 CPP JAVA Python", url: "https://www.youtube.com/watch?v=7gOCx1vbx0k&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=47", type: "video", platform: "Padho with Pratyush" },
      { title: "Best Explanation on Reverse LinkList Nodes in K Group | DSA Patterns CPP JAVA Python", url: "https://www.youtube.com/watch?v=BdpT6_jotcM&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=49", type: "video", platform: "Padho with Pratyush" },
      { title: "Rotate A Linked List | Master DSA in 2026 With DSA Patterns", url: "https://www.youtube.com/watch?v=5IV8CgWnf04&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=50", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Reverse a LinkedList (easy)", links: ["https://leetcode.com/problems/reverse-linked-list/"] },
      { title: "Reverse a Sub-list (medium)", links: ["https://leetcode.com/problems/reverse-linked-list-ii/"] },
      { title: "Reverse List in Pairs (Medium)", links: ["https://leetcode.com/problems/swap-nodes-in-pairs/description/"] },
      { title: "Reverse every K-element Sub-list (HARD)", links: ["https://leetcode.com/problems/reverse-nodes-in-k-group/"] },
      { title: "Reverse nodes in EVEN Length Groups (HARD)", links: ["https://leetcode.com/problems/reverse-nodes-in-even-length-groups/description/"] },
      { title: "Rotate a LinkedList (medium)", links: ["https://leetcode.com/problems/rotate-list/"] }
    ]
  },
  {
    pattern: "Stack",
    description: "Using LIFO behavior for balanced symbols and monotonic sequences.",
    videos: [
      { title: "Master STACK in DSA Patterns 2025 | Introduction to Stack | CPP JAVA PYTHON", url: "https://www.youtube.com/watch?v=V0wJuik3WSE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=39", type: "video", platform: "Padho with Pratyush" },
      { title: "Learn DSA Like Never Before | Master Stack DSA Pattern With This Simple Trick", url: "https://www.youtube.com/watch?v=K1idN2Rqcmw&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=40", type: "video", platform: "Padho with Pratyush" },
      { title: "Most Important STACK Question For FAANG Interviews | Master DSA Patterns", url: "https://www.youtube.com/watch?v=YutYOZFt6sQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=41", type: "video", platform: "Padho with Pratyush" },
      { title: "Next Greater Element | Stack and Queue DSA Pattern 2025", url: "https://www.youtube.com/watch?v=gFqOIPfAEjw&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=42", type: "video", platform: "Padho with Pratyush" },
      { title: "Master Stack DSA Pattern With 3 Questions | DSA Patterns Course", url: "https://www.youtube.com/watch?v=mMKZmo3iyyM&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=43", type: "video", platform: "Padho with Pratyush" },
      { title: "Revise Stack Data Structure in 10 Minutes | DSA Patterns Course", url: "https://www.youtube.com/watch?v=XpHIIQwVxvI&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=44", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "remove adjacent duplicates", links: ["https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/description/"] },
      { title: "Balanced Parentheses", links: ["https://leetcode.com/problems/valid-parentheses/description/"] },
      { title: "Next Greater Element (easy)", links: ["https://leetcode.com/problems/next-greater-element-ii/description/"] },
      { title: "Daily Temperatures (easy)", links: ["https://leetcode.com/problems/daily-temperatures/"] },
      { title: "Remove Nodes From Linked List (easy)", links: ["https://leetcode.com/problems/remove-nodes-from-linked-list/"] },
      { title: "Remove All Adjacent Duplicates in String II (medium)", links: ["https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/"] },
      { title: "Simplify Path (medium)", links: ["https://leetcode.com/problems/simplify-path/"] },
      { title: "Remove K Digits (hard)", links: ["https://leetcode.com/problems/remove-k-digits/"] }
    ]
  },
  {
    pattern: "Hash Maps",
    description: "Using hash-based lookup for frequency counting and fast access.",
    videos: [
      { title: "The Only Video You Need TO Master HASHMAPS | DSA Patterns Course Cpp JAVA Python", url: "https://www.youtube.com/watch?v=9a4A6CbrLCo&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=45", type: "video", platform: "Padho with Pratyush" },
      { title: "4 Questions to Master HASHMAPS in C++ JAVA Python | DSA Patterns Course 2026", url: "https://www.youtube.com/watch?v=ICggOtnixBk&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=46", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "First Non-repeating Character (easy)", links: ["https://leetcode.com/problems/first-unique-character-in-a-string/"] },
      { title: "Maximum Number of Balloons (easy)", links: ["https://leetcode.com/problems/maximum-number-of-balloons/"] },
      { title: "Longest Palindrome (easy)", links: ["https://leetcode.com/problems/longest-palindrome/"] },
      { title: "Ransom Note (easy)", links: ["https://leetcode.com/problems/ransom-note/"] }
    ]
  },
  {
    pattern: "Binary Search",
    description: "Efficient searching in sorted arrays and search spaces.",
    videos: [
      { title: "Believe Me, You DON'T Know The Binary Search Algorithm | DSA Patterns Course 2026", url: "https://www.youtube.com/watch?v=S0E1Ix67qbc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=51", type: "video", platform: "Padho with Pratyush" },
      { title: "This is The Best Intro To Binary Search | DSA Patterns 2026", url: "https://www.youtube.com/watch?v=zEEwwS9_fwA&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=52", type: "video", platform: "Padho with Pratyush" },
      { title: "Most Important Question in BINARY Search Algorithm | Find Mountain peak Leetcode", url: "https://www.youtube.com/watch?v=RuBcXYteHj0&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=53", type: "video", platform: "Padho with Pratyush" },
      { title: "I Will make Binary Search Easy For You | DSA Patterns Course | C++ Java Python", url: "https://www.youtube.com/watch?v=91qkzhmEO48&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=54", type: "video", platform: "Padho with Pratyush" },
      { title: "Don't Miss This Binary Search Interview Question | DSA Patterns 2026 Cpp Java Python", url: "https://www.youtube.com/watch?v=TIBZsd-Qlrg&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=55", type: "video", platform: "Padho with Pratyush" },
      { title: "One Video To Solve All Binary Search Interview Questions | DSA Patterns 2026", url: "https://www.youtube.com/watch?v=0Kxg0LPGwFo&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=56", type: "video", platform: "Padho with Pratyush" },
      { title: "Best Explanation of Aggressive Cows Leetcode | Binary Search DSA Pattern", url: "https://www.youtube.com/watch?v=TF53eWL47ws&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=57", type: "video", platform: "Padho with Pratyush" },
      { title: "Do Not Miss This Amazon Interview Question | Binary Search DSA Patterns Cpp Java Python", url: "https://www.youtube.com/watch?v=TqxB7zruBm4&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=58", type: "video", platform: "Padho with Pratyush" },
      { title: "Binary Search on 2D Array | Best Video On Binary Search DSA Patterns CPP Java Python", url: "https://www.youtube.com/watch?v=stji3QvQ-OU&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=59", type: "video", platform: "Padho with Pratyush" },
      { title: "I Failed a 40 LPA Interview Because Of This Binary Search Question | Do not Miss This", url: "https://www.youtube.com/watch?v=DSGtYGZKEZ4&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=60", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Binary search basic", links: ["https://leetcode.com/problems/binary-search/"] },
      { title: "Upper Bound/ Ceiling", links: ["https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1"] },
      { title: "First and Last position", links: ["https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/"] },
      { title: "Search in infinite Sorted array", links: ["https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/"] },
      { title: "Peak index in Mountain", links: ["https://leetcode.com/problems/peak-index-in-a-mountain-array/"] },
      { title: "Aggressive cows", links: ["https://www.geeksforgeeks.org/problems/aggressive-cows/1"] },
      { title: "Book Allocation Problem", links: ["https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1"] },
      { title: "Capacity to ship packages in d days", links: ["https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/description/"] },
      { title: "Search 2D matrix", links: ["https://leetcode.com/problems/search-a-2d-matrix/"] },
      { title: "Search 2D matrix (Hard)", links: ["https://leetcode.com/problems/search-a-2d-matrix-ii/description/"] },
      { title: "median of 2 sorted arrays", links: ["https://leetcode.com/problems/median-of-two-sorted-arrays/"] }
    ]
  },
  {
    pattern: "Heap / Priority Queue",
    description: "Efficiently finding top K elements and managing dynamic data streams.",
    videos: [
      { title: "Introduction To Heap DSA Pattern | One Of The Most Important Patterns For Coding Interviews", url: "https://www.youtube.com/watch?v=_1AbrkD8pak&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=61", type: "video", platform: "Padho with Pratyush" },
      { title: "The Best Video To Learn HEAP Data Structure | DSA Patterns 2026 CPP JAVA Python", url: "https://www.youtube.com/watch?v=zzu-k85RLGs&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=62", type: "video", platform: "Padho with Pratyush" },
      { title: "HEAP On Pairs Explained in One Shot | CPP JAVA PYTHON | DSA Patterns", url: "https://www.youtube.com/watch?v=I1-0ALAJxZI&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=63", type: "video", platform: "Padho with Pratyush" },
      { title: "Solve Any HEAP Question By This Template | Top K frequent Elements Leetcode", url: "https://www.youtube.com/watch?v=5Net0Dd7NAA&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=64", type: "video", platform: "Padho with Pratyush" },
      { title: "5 Step Template To Solve any HEAP Problem | DSA PATTERNS 2026", url: "https://www.youtube.com/watch?v=ks8rocoXbJk&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=65", type: "video", platform: "Padho with Pratyush" },
      { title: "You Will Never Forget The HEAP Greedy DSA Pattern After This Video", url: "https://www.youtube.com/watch?v=SCe8N_v-8Ls&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=66", type: "video", platform: "Padho with Pratyush" },
      { title: "Google Interview Question On Heap Dsa Pattern Made Simple | IPO Leetcode", url: "https://www.youtube.com/watch?v=DYBWbmhisiM&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=67", type: "video", platform: "Padho with Pratyush" },
      { title: "Best Explanation Of Merge K Sorted Lists | HEAP DSA Pattern", url: "https://www.youtube.com/watch?v=55aenUfSIhQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=68", type: "video", platform: "Padho with Pratyush" },
      { title: "Let's Revise HEAP Data Structure With This Leetcode Hard Question | CPU Task Scheduler", url: "https://www.youtube.com/watch?v=1yax0YQOb8w&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=69", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "kth smallest", links: ["https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1"] },
      { title: "kth largest", links: ["https://leetcode.com/problems/kth-largest-element-in-an-array/description/"] },
      { title: "TOP K frequent Elements", links: ["https://leetcode.com/problems/top-k-frequent-elements/description/"] },
      { title: "K closest points to origin", links: ["https://leetcode.com/problems/k-closest-points-to-origin/description/"] },
      { title: "Merge K Sorted Arrays", links: ["https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1"] },
      { title: "LAST STONE WEIGHT", links: ["https://leetcode.com/problems/last-stone-weight/description/"] },
      { title: "CPU Task Scheduler", links: ["https://leetcode.com/problems/task-scheduler/description/"] },
      { title: "IPO", links: ["https://leetcode.com/problems/ipo/description/"] },
      { title: "Find median in data stream", links: ["https://leetcode.com/problems/find-median-from-data-stream/description/"] }
    ]
  },
  {
    pattern: "Recursion",
    description: "Fundamental technique for solving problems by breaking them down into smaller subproblems.",
    videos: [
      { title: "Intro To Recursion DSA Pattern | Beginner To Advanced | Best Recursion Series", url: "https://www.youtube.com/watch?v=HdPb_thlF5s&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=70", type: "video", platform: "Padho with Pratyush" },
      { title: "Recursion Fixed Template For All Questions | One Template To Solve Recursion Problems", url: "https://www.youtube.com/watch?v=Qh_U6NYf99o&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=71", type: "video", platform: "Padho with Pratyush" },
      { title: "Recursion & Backtracking Explained Once and For All | DSA for Beginners", url: "https://www.youtube.com/watch?v=I081UkZCLlc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=72", type: "video", platform: "Padho with Pratyush" },
      { title: "Learn Recursion Like A Pro", url: "https://www.youtube.com/watch?v=j4wjZqzhMqc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=73", type: "video", platform: "Padho with Pratyush" },
      { title: "What If You Could Master Recursion in 3 Easy Questions", url: "https://www.youtube.com/watch?v=-gC-QEdpvO4&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=74", type: "video", platform: "Padho with Pratyush" },
      { title: "Start Learning Recursion Backtracking With This Question | Best Recursion Explanation", url: "https://www.youtube.com/watch?v=PqwlS4bcr1Y&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=75", type: "video", platform: "Padho with Pratyush" },
      { title: "5 Point Template To Crack any Recursion Leetcode Question | DSA Patterns 2026", url: "https://www.youtube.com/watch?v=IKfIT6uFOcs&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=76", type: "video", platform: "Padho with Pratyush" },
      { title: "Stop Struggling with Recursion: Combination Sum Explained Simply", url: "https://www.youtube.com/watch?v=AflRvP5LFFc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=77", type: "video", platform: "Padho with Pratyush" },
      { title: "Next Phase Plan For The DSA Pattern Series | Comment Your Thoughts", url: "https://www.youtube.com/watch?v=GNz8F8MCOsU&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=78", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Combination Sum", links: ["https://leetcode.com/problems/combination-sum/description/"] },
      { title: "Permutations", links: ["https://leetcode.com/problems/permutations/description/"] },
      { title: "Subsets", links: ["https://leetcode.com/problems/subsets/description/"] }
    ]
  },
  {
    pattern: "Tree Pattern",
    description: "Mastering traversals, properties, and path problems in binary trees.",
    videos: [
      { title: "Starting TREE Series!", url: "https://www.youtube.com/watch?v=VdujirLGDDE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=79", type: "video", platform: "Padho with Pratyush" },
      { title: "Tree Traversals Made Simple! Preorder Inorder Postorder", url: "https://www.youtube.com/watch?v=ZvYJT_QwnEw&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=80", type: "video", platform: "Padho with Pratyush" },
      { title: "EP 03: Level Order Traversal In Binary Tree | Intuition and Template", url: "https://www.youtube.com/watch?v=-g6h0Ok1Buk&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=81", type: "video", platform: "Padho with Pratyush" },
      { title: "One Pattern To Solve Any Tree Question On Leetcode!", url: "https://www.youtube.com/watch?v=nkWopJZsqXc&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=82", type: "video", platform: "Padho with Pratyush" },
      { title: "Tree Series Ep-05: Check for Symmetrical Binary Trees | C++ | Java", url: "https://www.youtube.com/watch?v=dXJdiFMLdZQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=83", type: "video", platform: "Padho with Pratyush" },
      { title: "Better Than STRIVER ! LCA in Binary TREE Explanation with Intuition", url: "https://www.youtube.com/watch?v=_UoIHF3KUpE&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=84", type: "video", platform: "Padho with Pratyush" },
      { title: "Introduction to Binary Search Tree! Don't Miss", url: "https://www.youtube.com/watch?v=CDo0V5Jbb2o&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=85", type: "video", platform: "Padho with Pratyush" },
      { title: "LCA in Binary Search Tree – Don't Miss This Trick! | Trees Ep 08 | DSA Series", url: "https://www.youtube.com/watch?v=QopDohCvJVA&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=86", type: "video", platform: "Padho with Pratyush" },
      { title: "Definitely Better Than Striver.. Two Sum in Binary search Tree!", url: "https://www.youtube.com/watch?v=Zr2z8DD6TuQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=87", type: "video", platform: "Padho with Pratyush" },
      { title: "Path Sum Problem in 5 Minutes - No Confusion", url: "https://www.youtube.com/watch?v=Sat-0sqezpM&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=88", type: "video", platform: "Padho with Pratyush" },
      { title: "Diameter of Binary Tree | Check Complete Binary Tree | Tree DSA Series", url: "https://www.youtube.com/watch?v=_V7J7exlyzk&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=89", type: "video", platform: "Padho with Pratyush" },
      { title: "The BST Validation Problem Everyone Gets Wrong", url: "https://www.youtube.com/watch?v=5PrzZfhk1OQ&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=90", type: "video", platform: "Padho with Pratyush" },
      { title: "Tree Series Last Video Construct a Binary Tree from Preorder and Inorder Traversal", url: "https://www.youtube.com/watch?v=14NH9aD7XeY&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=91", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Inorder Traversal", links: ["https://leetcode.com/problems/binary-tree-inorder-traversal/description/"] },
      { title: "Preorder Traversal", links: ["https://leetcode.com/problems/binary-tree-preorder-traversal/description/"] },
      { title: "Level Order", links: ["https://leetcode.com/problems/binary-tree-level-order-traversal/description/"] },
      { title: "Invert Tree", links: ["https://leetcode.com/problems/invert-binary-tree/description/"] },
      { title: "Symmetric Tree", links: ["https://leetcode.com/problems/symmetric-tree/description/"] },
      { title: "LCA of Binary Tree", links: ["https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/"] },
      { title: "Diameter of Binary Tree", links: ["https://leetcode.com/problems/diameter-of-binary-tree/description/"] },
      { title: "Validate BST", links: ["https://leetcode.com/problems/validate-binary-search-tree/description/"] },
      { title: "Path Sum II", links: ["https://leetcode.com/problems/path-sum-ii/"] }
    ]
  },
  {
    pattern: "Graph Pattern",
    description: "Deep dive into connectivity, shortest paths, and search algorithms.",
    videos: [
      { title: "Intro To Graphs DSA Pattern | Master Graphs in 12 Days | Zero", url: "https://www.youtube.com/watch?v=vcx1HWoHK1o&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=92", type: "video", platform: "Padho with Pratyush" },
      { title: "Graph Representation: Adjacency Matrix vs Adjacency List – Which is Better?", url: "https://www.youtube.com/watch?v=WR-hWofGb_U&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=93", type: "video", platform: "Padho with Pratyush" },
      { title: "Master DFS/BFS in Graphs | Graph series DSA Patterns", url: "https://www.youtube.com/watch?v=O04KAy7cLBs&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=94", type: "video", platform: "Padho with Pratyush" },
      { title: "Most Asked Graphs Question in FAANG Interviews | Number of Islands Leetcode", url: "https://www.youtube.com/watch?v=mbSYZzBjs4U&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=95", type: "video", platform: "Padho with Pratyush" },
      { title: "Rotten Oranges: Multi-Source BFS | Graph Series", url: "https://www.youtube.com/watch?v=4L4MYtxGh9s&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=96", type: "video", platform: "Padho with Pratyush" },
      { title: "DFS Cycle Detection | From Basics to Advanced | DSA Pattern Graph Series", url: "https://www.youtube.com/watch?v=D5jgZ4PnU5o&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=97", type: "video", platform: "Padho with Pratyush" },
      { title: "No one has explained Topological sort like This!", url: "https://www.youtube.com/watch?v=OSYgRvaWFSI&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=98", type: "video", platform: "Padho with Pratyush" },
      { title: "The Graph Algorithm Used In Amazon! Bipartite graph/ Graph Coloring| CPP JAVA Python", url: "https://www.youtube.com/watch?v=LIGrIglQ7TY&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=99", type: "video", platform: "Padho with Pratyush" },
      { title: "Easiest Graphs question Surrounded Regions | DSA Patterns 2026", url: "https://www.youtube.com/watch?v=6ZtNHvGeEu4&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=100", type: "video", platform: "Padho with Pratyush" }
    ],
    questions: [
      { title: "Construct Adjacency List", links: ["https://www.geeksforgeeks.org/problems/print-adjacency-list-1587115620/1"] },
      { title: "Graph DFS", links: ["https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1"] },
      { title: "Number of Islands", links: ["https://leetcode.com/problems/number-of-islands/description/"] },
      { title: "Number of Provinces", links: ["https://leetcode.com/problems/number-of-provinces/description/"] },
      { title: "Rotten Oranges", links: ["https://leetcode.com/problems/rotting-oranges/"] },
      { title: "Dijkstra Algorithm", links: ["https://www.geeksforgeeks.org/problems/implementing-dijkstra-set-1-adjacency-matrix/1"] }
    ]
  }
];

export const THEORY_SUBJECTS: Record<string, TheorySubject> = {
  polity: {
    title: "Indian Polity",
    recommendation: "Bookstawa",
    resources: [
      { title: "Indian Polity Full Playlist", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW2mGIuerMSMDc5LjeoAABjN", type: "video", platform: "Bookstawa" },
    ]
  },
  history: {
    title: "History",
    recommendation: "Bookstawa",
    resources: [
      { title: "Modern Indian History", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW1BCazrkRFzS9NxCZVMiXcM", type: "video", platform: "Bookstawa" },
      { title: "Ancient India History", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW3eHK_-7gxmmKqNeEuyz1I6", type: "video", platform: "Bookstawa" },
      { title: "Medieval India History", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW3c01ihRcCxFL5asqCeO5SM", type: "video", platform: "Bookstawa" },
      { title: "Art & Culture", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW0CmDMqEF2uOA2pMSbqoRdH", type: "video", platform: "Bookstawa" }
    ]
  },
  geography: {
    title: "Geography",
    recommendation: "Bookstawa",
    resources: [
      { title: "Complete Geography (Bookstawa)", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW0RQKIkvGyWlHRYaj0FoaeT", type: "video", platform: "Bookstawa" },
      { title: "Indian Geography Mapping", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW0RQKIkvGyWlHRYaj0FoaeT", type: "video", platform: "Bookstawa" }
    ]
  },
  economics: {
    title: "Economics",
    recommendation: "Bookstawa",
    resources: [
      { title: "Indian Economy Full Course", url: "https://www.youtube.com/playlist?list=PLZfz5K8XpMW3p6uoaRSnmClfoe5bNvCjm", type: "video", platform: "Bookstawa" }
    ]
  }
};

export const APTITUDE_TOPICS: Resource[] = [
  { title: "Percentage", url: "https://www.youtube.com/watch?v=anhbMmxLSiU", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Profit & Loss", url: "https://www.youtube.com/watch?v=SPPbgDg9dOU", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Ratio & Proportion", url: "https://www.youtube.com/watch?v=f9GdqcRu3vc", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Simple & Compound Interest", url: "https://www.youtube.com/watch?v=cD5W2n4izOo", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Average", url: "https://www.youtube.com/watch?v=L1EeFENQ5lk", type: "video", platform: "Rakesh Yadav Sir" },
  { title: "Time & Work", url: "https://www.youtube.com/watch?v=iXzJxeOGZZ0", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Time, Speed & Distance", url: "https://www.youtube.com/watch?v=Jc0lY4Cr9Pg", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Number System", url: "https://www.youtube.com/watch?v=0BoZmscnsok", type: "video", platform: "Rakesh Yadav Sir" },
  { title: "Algebra", url: "https://www.youtube.com/watch?v=0rk-sKU7sRo", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Geometry", url: "https://www.youtube.com/watch?v=az_FEbPlOVA", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Mensuration (2D & 3D)", url: "https://www.youtube.com/watch?v=9FK4uk3qux8", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Trigonometry", url: "https://www.youtube.com/watch?v=gNchN62K70A", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Data Interpretation", url: "https://www.youtube.com/watch?v=mIfqn3aCK18", type: "video", platform: "Aditya Ranjan Sir" },
  { title: "Computation of Whole Numbers", url: "https://www.youtube.com/watch?v=0BoZmscnsok", type: "video", platform: "Rakesh Yadav Sir" },
  { title: "Decimals and Fractions", url: "https://www.youtube.com/watch?v=DrveOaJEbCI", type: "video", platform: "Rakesh Yadav Sir" }
];

export const EXTRA_APTITUDE_TOPICS: Resource[] = [
  { title: "General Intelligence & Reasoning", url: "https://www.youtube.com/results?search_query=rakesh+yadav+reasoning+playlist", type: "video", platform: "Rakesh Yadav" },
  { title: "English Comprehension", url: "https://www.youtube.com/results?search_query=ssc+cgl+english+comprehension+playlist", type: "video", platform: "SSC Channels" },
  { title: "General Awareness", url: "https://www.youtube.com/results?search_query=ssc+cgl+general+awareness+playlist", type: "video", platform: "SSC Channels" },
  { title: "Computer Knowledge", url: "https://www.youtube.com/results?search_query=ssc+cgl+computer+knowledge+playlist", type: "video", platform: "SSC Channels" },
  { title: "Statistics", url: "https://www.youtube.com/results?search_query=ssc+cgl+statistics+playlist", type: "video", platform: "SSC Channels" },
];

export const AI_TRENDS: Trend[] = [
  {
    title: "Agentic Autonomy",
    description: "AI agents that can plan, reason, and execute multi-step business workflows with minimal human oversight.",
    resources: [
      { title: "State of AI Agents 2026", url: "https://arxiv.org/search/cs?query=agentic+ai&searchtype=all&abstracts=show&order=-announced_date_first&size=50", type: "article" }
    ]
  },
  {
    title: "Local LLM Sovereignty",
    description: "The rise of private, offline model deployments (1B-7B) reaching parity with 2024-era frontier models.",
    resources: [
      { title: "Local Models Research", url: "https://arxiv.org/search/cs?query=small+language+models&searchtype=all&abstracts=show&order=-announced_date_first&size=50", type: "article" }
    ]
  },
  {
    title: "Multi-modal Action Models",
    description: "Models that don't just see and hear, but 'act' through digital and physical interfaces (LAMs).",
    resources: [
      { title: "Large Action Models", url: "https://huggingface.co/papers?q=action+model", type: "article" }
    ]
  },
  {
    title: "Neuro-symbolic Reasoning",
    description: "Combining neural networks' pattern recognition with symbolic logic for hallucination-free verifiable paths.",
    resources: [
      { title: "Latest Neuro-symbolic Papers", url: "https://arxiv.org/search/cs?query=neuro-symbolic+logic&searchtype=all&abstracts=show&order=-announced_date_first&size=50", type: "article" }
    ]
  },
  {
    title: "Hardware Physical Grounding",
    description: "AI infused into robotics operating strictly with spatial and temporal awareness of the physical world.",
    resources: [
      { title: "Robotics & Physical AI", url: "https://huggingface.co/papers?q=robotics+grounding", type: "article" }
    ]
  },
  {
    title: "Zero-Shot Generative UI",
    description: "Dynamically generated user interfaces based entirely on contextual intent rather than pre-defined states.",
    resources: [
      { title: "Generative UI Research", url: "https://vercel.com/blog/ai-sdk-3-generative-ui", type: "article" }
    ]
  }
];
