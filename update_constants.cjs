const fs = require('fs');

const videosData = [
  { "index": 1, "title": "The Best Way To Learn DSA in 2025 | DSA Patterns by IITian", "videoId": "qH2VQY48mg4" },
  { "index": 2, "title": "Episode 2 – DSA Patterns Roadmap 2025 (Beginner to Advanced)", "videoId": "S8tpzqrwnHk" },
  { "index": 3, "title": "Episode 3 –Master DSA Patterns with 2 Pointers Technique", "videoId": "Fu7LD_mIo00" },
  { "index": 4, "title": "Episode - 4 | Master DSA Patterns with the 2 Pointer Technique", "videoId": "PvyEr3CeKzE" },
  { "index": 5, "title": "Episode 5 - 2 Pointer DSA Pattern | DSA PATTERNS ROADMAP 2025", "videoId": "nPdxCoVHC90" },
  { "index": 6, "title": "DSA Patterns Episode 6 - What If You Could Master Time Complexity in Just 30 Minutes?", "videoId": "oFwHwCkSoGw" },
  { "index": 7, "title": "DSA Patterns Episode 7: Two Pointers Pattern: More Interview Questions", "videoId": "rM9EthMlXnw" },
  { "index": 8, "title": "DSA PATTERNS Episode 8 | Two Pointers Pattern: Most Important Questions", "videoId": "ljJJcYql6Bc" },
  { "index": 9, "title": "DSA PAtterns Episode 9 | Two Pointers Pattern: Complete Revision in One Video", "videoId": "n7v0SokbF4I" },
  { "index": 10, "title": "DSA PATTERNS Episode 10 | Introduction to Sliding Window", "videoId": "V6pRTnOZ7Mc" },
  { "index": 11, "title": "DSA PATTERNS Episode 11 Sliding Window Pattern: Easy & Medium Questions", "videoId": "DL8LSXUsfWE" },
  { "index": 12, "title": "DSA PATTERNS Episode 12 Sliding Window Pattern: Core Interview Questions", "videoId": "v4pIgiBQMh8" },
  { "index": 13, "title": "DSA PATTERNS Episode 13 Sliding Window Pattern: Important Questions", "videoId": "2HZ12B2ZPAQ" },
  { "index": 14, "title": "DSA PATTERNS Episode 14 Sliding Window Pattern Revision (Part 1)", "videoId": "lyZp-49pdzQ" },
  { "index": 15, "title": "DSA PATTERNS Episode 15 | Sliding Window Pattern Revision (Part 2)", "videoId": "IR3oL6ltbJ8" },
  { "index": 16, "title": "DSA PATTERNS Episode 16 | Sliding Window Pattern: Amazon Interview Question", "videoId": "9wc8HZH_sh4" },
  { "index": 17, "title": "DSA PATTERNS Episode 17 | Linked List Slow & Fast Pointer Technique: Introduction", "videoId": "IxxlDYwMrZ8" },
  { "index": 18, "title": "My 4 Year DSA Learning JOURNEY | Mistakes | Striver Love Babbar Pepcoding Apna College", "videoId": "7ztFXqo8nZo" },
  { "index": 19, "title": "DSA PATTERNS Episode 18 | Linked List Slow–Fast Pointer: Important Questions", "videoId": "jDP1NkjVjWQ" },
  { "index": 20, "title": "DSA PATTERNS Episode 19 | Linked List Basics for Beginners", "videoId": "NSh5oNElD84" },
  { "index": 21, "title": "DSA PATTERNS Episode 20 | Linked List Slow–Fast Pointer: Important Questions", "videoId": "RNpZBhZBtJc" },
  { "index": 22, "title": "DSA PATTERNS Episode 21 | Linked List Slow–Fast Pointer Complete Revision", "videoId": "ftpI12-e3zs" },
  { "index": 23, "title": "DSA PATTERNS Episode 22 | Kadane’s Algorithm Pattern: Introduction & Intuition", "videoId": "N8vJ8RyQEes" },
  { "index": 24, "title": "The DSA Revolution Has Started — And People Are Not Happy", "videoId": "EcQN1jziwDo" },
  { "index": 25, "title": "DSA PATTERNS Episode 23 | Kadane’s Algorithm: Most Important Interview Question", "videoId": "JUV-Hdtuzsw" },
  { "index": 26, "title": "DSA PATTERNS Episode 24 | Kadane’s Algorithm Pattern: Quick Revision", "videoId": "Bt9rgQgGf64" },
  { "index": 27, "title": "DSA PATTERNS Episode 25 | Linked List Start of Cycle Logic Explained", "videoId": "p8efFVGuqyI" },
  { "index": 28, "title": "DSA Patterns Course 2025 | Big Announcement | Best Way To Learn DSA in 2025", "videoId": "dQ4amKJuE7I" },
  { "index": 29, "title": "DSA PATTERNS Episode 26 | Prefix Sum Pattern Introduction | DSA ROADMAP 2025", "videoId": "F86WfZ5RUC8" },
  { "index": 30, "title": "DSA Patterns Episode 27 | Master DSA Patterns With Prefix Sum | Leetcode Patterns", "videoId": "XLtRoHIDGs0" },
  { "index": 31, "title": "DSA Patterns Lecture 28 | Master DSA Patterns With Prefix Sum | Interview Questions FAANG", "videoId": "sh0Ng7sjscE" },
  { "index": 32, "title": "Lecture 29 | The ABSOLUTE BEST Prefix Sum Pattern Hacks for Amazon Interviews", "videoId": "EYpv5sypVdE" },
  { "index": 33, "title": "DSA Patterns Lecture 30 | Master Prefix Sum Pattern in 10 Minutes", "videoId": "oZnLzJCOdPA" },
  { "index": 34, "title": "DSA Patterns L31 | Master Merge Interval DSA Patterns | MERGE INTERVALS LEETCODE", "videoId": "aH5aeejuJU8" },
  { "index": 35, "title": "L32 | Master DSA Pattern Merge Interval | Leetcode Merge Intervals", "videoId": "yAopxaHmRn0" },
  { "index": 36, "title": "DSA Patterns L33 | Merge Intervals | Master DSA Patterns in 2025", "videoId": "yoh0p_Ag7Q4" },
  { "index": 37, "title": "L34 DSA Patterns 2025 | Merge Overlapping Intervals | Merge Interval DSA Pattern", "videoId": "b-qtjXsGfqo" },
  { "index": 38, "title": "35. DSA PATTERNS 2025 | Master Merge Interval With Interview Questions | FAANG", "videoId": "o-ozvzzFpKA" },
  { "index": 39, "title": "Master STACK in DSA Patterns 2025 | Introduction to Stack | CPP JAVA PYTHON", "videoId": "V0wJuik3WSE" },
  { "index": 40, "title": "Learn DSA Like Never Before | Master Stack DSA Pattern With This Simple Trick", "videoId": "K1idN2Rqcmw" },
  { "index": 41, "title": "Most Important STACK Question For FAANG Interviews | Master DSA Patterns", "videoId": "YutYOZFt6sQ" },
  { "index": 42, "title": "Next Greater Element | Stack and Queue DSA Pattern 2025", "videoId": "gFqOIPfAEjw" },
  { "index": 43, "title": "Master Stack DSA Pattern With 3 Questions | DSA Patterns Course", "videoId": "mMKZmo3iyyM" },
  { "index": 44, "title": "Revise Stack Data Structure in 10 Minutes | DSA Patterns Course", "videoId": "XpHIIQwVxvI" },
  { "index": 45, "title": "The Only Video You Need TO Master HASHMAPS | DSA Patterns Course Cpp JAVA Python", "videoId": "9a4A6CbrLCo" },
  { "index": 46, "title": "4 Questions to Master HASHMAPS in C++ JAVA Python | DSA Patterns Course 2026", "videoId": "ICggOtnixBk" },
  { "index": 47, "title": "Linked List Reversal In the Easiest Way Possible | DSA Patterns Course 2026 CPP JAVA Python", "videoId": "7gOCx1vbx0k" },
  { "index": 48, "title": "Best Explanation Of Kadane One Deletion On The Internet | DSA Pattern Course CPP JAVA", "videoId": "jIz4zcFuUU8" },
  { "index": 49, "title": "Best Explanation on Reverse LinkList Nodes in K Group | DSA Patterns CPP JAVA Python", "videoId": "BdpT6_jotcM" },
  { "index": 50, "title": "Rotate A Linked List | Master DSA in 2026 With DSA Patterns", "videoId": "5IV8CgWnf04" },
  { "index": 51, "title": "Believe Me, You DON'T Know The Binary Search Algorithm | DSA Patterns Course 2026", "videoId": "S0E1Ix67qbc" },
  { "index": 52, "title": "This is The Best Intro To Binary Search | DSA Patterns 2026", "videoId": "zEEwwS9_fwA" },
  { "index": 53, "title": "Most Important Question in BINARY Search Algorithm | Find Mountain peak Leetcode", "videoId": "RuBcXYteHj0" },
  { "index": 54, "title": "I Will make Binary Search Easy For You | DSA Patterns Course | C++ Java Python", "videoId": "91qkzhmEO48" },
  { "index": 55, "title": "Don't Miss This Binary Search Interview Question | DSA Patterns 2026 Cpp Java Python", "videoId": "TIBZsd-Qlrg" },
  { "index": 56, "title": "One Video To Solve All Binary Search Interview Questions | DSA Patterns 2026", "videoId": "0Kxg0LPGwFo" },
  { "index": 57, "title": "Best Explanation of Aggressive Cows Leetcode | Binary Search DSA Pattern", "videoId": "TF53eWL47ws" },
  { "index": 58, "title": "Do Not Miss This Amazon Interview Question | Binary Search DSA Patterns Cpp Java Python", "videoId": "TqxB7zruBm4" },
  { "index": 59, "title": "Binary Search on 2D Array | Best Video On Binary Search DSA Patterns CPP Java Python", "videoId": "stji3QvQ-OU" },
  { "index": 60, "title": "I Failed a 40 LPA Interview Because Of This Binary Search Question | Do not Miss This", "videoId": "DSGtYGZKEZ4" },
  { "index": 61, "title": "Introduction To Heap DSA Pattern | One Of The Most Important Patterns For Coding Interviews", "videoId": "_1AbrkD8pak" },
  { "index": 62, "title": "The Best Video To Learn HEAP Data Structure | DSA Patterns 2026 CPP JAVA Python", "videoId": "zzu-k85RLGs" },
  { "index": 63, "title": "HEAP On Pairs Explained in One Shot | CPP JAVA PYTHON | DSA Patterns", "videoId": "I1-0ALAJxZI" },
  { "index": 64, "title": "Solve Any HEAP Question By This Template | Top K frequent Elements Leetcode", "videoId": "5Net0Dd7NAA" },
  { "index": 65, "title": "5 Step Template To Solve any HEAP Problem | DSA PATTERNS 2026", "videoId": "ks8rocoXbJk" },
  { "index": 66, "title": "You Will Never Forget The HEAP Greedy DSA Pattern After This Video", "videoId": "SCe8N_v-8Ls" },
  { "index": 67, "title": "Google Interview Question On Heap Dsa Pattern Made Simple | IPO Leetcode", "videoId": "DYBWbmhisiM" },
  { "index": 68, "title": "Best Explanation Of Merge K Sorted Lists | HEAP DSA Pattern", "videoId": "55aenUfSIhQ" },
  { "index": 69, "title": "Let's Revise HEAP Data Structure With This Leetcode Hard Question | CPU Task Scheduler", "videoId": "1yax0YQOb8w" },
  { "index": 70, "title": "Intro To Recursion DSA Pattern | Beginner To Advanced | Best Recursion Series", "videoId": "HdPb_thlF5s" },
  { "index": 71, "title": "Recursion Fixed Template For All Questions | One Template To Solve Recursion Problems", "videoId": "Qh_U6NYf99o" },
  { "index": 72, "title": "Recursion & Backtracking Explained Once and For All | DSA for Beginners", "videoId": "I081UkZCLlc" },
  { "index": 73, "title": "Learn Recursion Like A Pro", "videoId": "j4wjZqzhMqc" },
  { "index": 74, "title": "What If You Could Master Recursion in 3 Easy Questions", "videoId": "-gC-QEdpvO4" },
  { "index": 75, "title": "Start Learning Recursion Backtracking With This Question | Best Recursion Explanation", "videoId": "PqwlS4bcr1Y" },
  { "index": 76, "title": "5 Point Template To Crack any Recursion Leetcode Question | DSA Patterns 2026", "videoId": "IKfIT6uFOcs" },
  { "index": 77, "title": "Stop Struggling with Recursion: Combination Sum Explained Simply", "videoId": "AflRvP5LFFc" },
  { "index": 78, "title": "Next Phase Plan For The DSA Pattern Series | Comment Your Thoughts", "videoId": "GNz8F8MCOsU" },
  { "index": 79, "title": "Starting TREE Series!", "videoId": "VdujirLGDDE" },
  { "index": 80, "title": "Tree Traversals Made Simple! Preorder Inorder Postorder", "videoId": "ZvYJT_QwnEw" },
  { "index": 81, "title": "EP 03: Level Order Traversal In Binary Tree | Intuition and Template", "videoId": "-g6h0Ok1Buk" },
  { "index": 82, "title": "One Pattern To Solve Any Tree Question On Leetcode!", "videoId": "nkWopJZsqXc" },
  { "index": 83, "title": "Tree Series Ep-05: Check for Symmetrical Binary Trees | C++ | Java", "videoId": "dXJdiFMLdZQ" },
  { "index": 84, "title": "Better Than STRIVER ! LCA in Binary TREE Explanation with Intuition", "videoId": "_UoIHF3KUpE" },
  { "index": 85, "title": "Introduction to Binary Search Tree! Don't Miss", "videoId": "CDo0V5Jbb2o" },
  { "index": 86, "title": "LCA in Binary Search Tree – Don't Miss This Trick! | Trees Ep 08 | DSA Series", "videoId": "QopDohCvJVA" },
  { "index": 87, "title": "Definitely Better Than Striver.. Two Sum in Binary search Tree!", "videoId": "Zr2z8DD6TuQ" },
  { "index": 88, "title": "Path Sum Problem in 5 Minutes - No Confusion", "videoId": "Sat-0sqezpM" },
  { "index": 89, "title": "Diameter of Binary Tree | Check Complete Binary Tree | Tree DSA Series", "videoId": "_V7J7exlyzk" },
  { "index": 90, "title": "The BST Validation Problem Everyone Gets Wrong", "videoId": "5PrzZfhk1OQ" },
  { "index": 91, "title": "Tree Series Last Video Construct a Binary Tree from Preorder and Inorder Traversal", "videoId": "14NH9aD7XeY" },
  { "index": 92, "title": "Intro To Graphs DSA Pattern | Master Graphs in 12 Days | Zero", "videoId": "vcx1HWoHK1o" },
  { "index": 93, "title": "Graph Representation: Adjacency Matrix vs Adjacency List – Which is Better?", "videoId": "WR-hWofGb_U" },
  { "index": 94, "title": "Master DFS/BFS in Graphs | Graph series DSA Patterns", "videoId": "O04KAy7cLBs" },
  { "index": 95, "title": "Most Asked Graphs Question in FAANG Interviews | Number of Islands Leetcode", "videoId": "mbSYZzBjs4U" },
  { "index": 96, "title": "Rotten Oranges: Multi-Source BFS | Graph Series", "videoId": "4L4MYtxGh9s" },
  { "index": 97, "title": "DFS Cycle Detection | From Basics to Advanced | DSA Pattern Graph Series", "videoId": "D5jgZ4PnU5o" },
  { "index": 98, "title": "No one has explained Topological sort like This!", "videoId": "OSYgRvaWFSI" },
  { "index": 99, "title": "The Graph Algorithm Used In Amazon! Bipartite graph/ Graph Coloring| CPP JAVA Python", "videoId": "LIGrIglQ7TY" },
  { "index": 100, "title": "Easiest Graphs question Surrounded Regions | DSA Patterns 2026", "videoId": "6ZtNHvGeEu4" }
];

const patterns = {
  "Two Pointers": [3, 4, 5, 6, 7, 8, 9],
  "Sliding Window": [10, 11, 12, 13, 14, 15, 16],
  "Fast & Slow Pointers": [17, 18, 19, 20, 21, 22, 27],
  "Kadane Pattern": [23, 24, 25, 26, 48],
  "Prefix Sum": [28, 29, 30, 31, 32, 33],
  "Merge Intervals": [34, 35, 36, 37, 38],
  "Stack": [39, 40, 41, 42, 43, 44],
  "Hash Maps": [45, 46],
  "In-place Reversal of LinkedList": [47, 49, 50],
  "Binary Search": [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  "Heap / Priority Queue": [61, 62, 63, 64, 65, 66, 67, 68, 69],
  "Recursion": [70, 71, 72, 73, 74, 75, 76, 77, 78],
  "Tree Pattern": [79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91],
  "Graph Pattern": [92, 93, 94, 95, 96, 97, 98, 99, 100]
};

let content = fs.readFileSync('src/constants.tsx', 'utf8');

for (const [patternName, indices] of Object.entries(patterns)) {
  const blockStart = content.indexOf('pattern: "' + patternName + '"');
  if (blockStart === -1) {
    if (patternName === "Recursion") {
      // Need to append Recursion manually
      console.log("Recursion missing, ignoring for now");
      continue;
    }
  } else {
    // Find videos array start
    const videosStart = content.indexOf('videos: [', blockStart);
    const videosEnd = content.indexOf('],', videosStart) + 1;
    
    // Build new videos array
    let newVideos = 'videos: [\n';
    indices.forEach((idx, i) => {
      const v = videosData.find(vd => vd.index === idx);
      if (v) {
        newVideos += '      { title: "' + v.title.replace(/"/g, '\\"') + '", url: "https://www.youtube.com/watch?v=' + v.videoId + '&list=PLbJhGqY-mq47k_WLUtzVjmarUm1EuXPj2&index=' + v.index + '", type: "video", platform: "Padho with Pratyush" }' + (i < indices.length - 1 ? ',' : '') + '\n';
      }
    });
    newVideos += '    ]';
    
    content = content.substring(0, videosStart) + newVideos + content.substring(videosEnd);
  }
}

fs.writeFileSync('src/constants.tsx', content);
console.log("Updated constants.tsx");
