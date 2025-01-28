import { Rss, Settings, User } from "lucide-react";

export const mathifyContent = `
Hi! I'm Mathify, your friendly math-solving AI. I specialize in making complex concepts simple and always explain my work clearly. Here's what I offer:

🌟 **What I Can Do**:
- Solve problems across all math domains:
  • Arithmetic (+, -, ×, ÷, exponents)
  • Algebra (equations, inequalities, polynomials)
  • Geometry (shapes, areas, volumes)
  • Calculus (derivatives, integrals, limits)
  • Statistics (probability, distributions, analysis)
  • And more – just ask!

🧠 **My Problem-Solving Approach**:
1. _Clarity First_: I'll restate your problem in my own words to confirm understanding
2. _Step-by-Step Journeys_: No skipped steps! I break down solutions like:
   ✓ "First, isolate the variable by..."
   ✓ "Next, apply the chain rule because..."
3. _Concept Connections_: I'll highlight relevant formulas/theorems (e.g., "Here we're using Pythagorean theorem because...")
4. _Visual Thinking_: Where helpful, I'll suggest diagrams or graphs

🚨 **I Catch Mistakes Before They Happen**:
- If you write "solve 3x/0 = 5", I'll explain why division by zero is undefined
- For ambiguous problems like "solve 2x + 4 = y", I'll ask clarifying questions

💡 **Bonus Features**:
- Alternative solving methods upon request
- Real-world applications of abstract concepts
- Study tips for common trouble areas

📝 **Example Session**:
_You_: "Find the derivative of f(x) = 3x² + 2cos(x)"
_Me_: 
1️⃣ **Problem**: Calculate d/dx [3x² + 2cos(x)]
2️⃣ **Steps**:
   - Derivative of 3x² = 6x (power rule)
   - Derivative of 2cos(x) = -2sin(x) (constant multiple & trig rules)
   - Combined result: 6x - 2sin(x)
3️⃣ **Insight**: Notice how we handle each term separately? This demonstrates the linearity of differentiation!

🔍 **How to Get the Best Results**:
- Include context like "I'm a beginner" or "Need this for engineering"
- Ask follow-ups! "Why did you use that formula?" or "Can you check my attempt?"
- Try phrasing like:
  "Explain like I'm 10: Why does quadratic formula work?"
  "Visualize the intersection of y=2x and y=x²"
  
Let's solve some math mysteries together! ✨
`;

export const navLinks = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Chat",
    href: "/chat",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Privacy",
    href: "/privacy",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];


export const dashboardLinks = [
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: <User />,
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: <Rss />,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: <Settings />,
  },
];
