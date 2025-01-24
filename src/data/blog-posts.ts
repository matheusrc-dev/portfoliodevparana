import CodeIcon from '@/assets/icons/code-icon.vue'

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  date: string
  icon: any
  content: string
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: 'Getting Started with Vue.js 3',
    excerpt: 'Learn the basics of Vue.js 3 and its composition API. We\'ll cover setup, reactivity, and components.',
    date: 'Jan 23, 2025',
    icon: CodeIcon,
    content: `
      <h2>Introduction to Vue.js 3</h2>
      <p>Vue.js 3 is a progressive framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.</p>

      <h3>The Composition API</h3>
      <p>One of the major features introduced in Vue 3 is the Composition API. It provides a set of additive, function-based APIs that allow flexible composition of component logic. Here's a simple example:</p>

      <pre><code>
import { ref, computed } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

    return {
      count,
      doubleCount,
      increment
    }
  }
}
      </code></pre>

      <h3>Key Features</h3>
      <ul>
        <li>Improved TypeScript support</li>
        <li>Composition API for better code organization</li>
        <li>Enhanced performance with Virtual DOM</li>
        <li>Better tree-shaking support</li>
      </ul>

      <h3>Getting Started</h3>
      <p>To create a new Vue.js 3 project, you can use the following command:</p>

      <pre><code>npm create vue@latest</code></pre>

      <p>This will create a new project with Vue 3 and all the necessary tooling set up for you.</p>

      <h3>Conclusion</h3>
      <p>Vue.js 3 brings many improvements and new features that make it an excellent choice for modern web development. Whether you're building a small application or a large-scale enterprise system, Vue.js 3 provides the tools and flexibility you need.</p>
    `
  },
  {
    id: 2,
    title: 'Mastering Tailwind CSS',
    excerpt: 'Deep dive into Tailwind CSS utility classes and how to create a custom design system.',
    date: 'Jan 22, 2025',
    icon: CodeIcon,
    content: `
      <h2>Understanding Tailwind CSS</h2>
      <p>Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs. Instead of opinionated, predesigned components, Tailwind gives you the building blocks to create your own unique designs.</p>

      <h3>Key Concepts</h3>
      <ul>
        <li>Utility-First Approach</li>
        <li>Responsive Design</li>
        <li>Dark Mode</li>
        <li>Custom Configuration</li>
      </ul>

      <h3>Basic Usage</h3>
      <p>Here's an example of how to style a button using Tailwind CSS:</p>

      <pre><code>
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Click me
</button>
      </code></pre>

      <h3>Creating a Custom Design System</h3>
      <p>You can customize Tailwind by modifying the tailwind.config.js file:</p>

      <pre><code>
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#1a73e8',
        secondary: '#4285f4',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
      }
    }
  }
}
      </code></pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use @apply for commonly repeated utility combinations</li>
        <li>Leverage the configuration file for consistency</li>
        <li>Use responsive prefixes for different screen sizes</li>
        <li>Extract components when patterns repeat</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Tailwind CSS provides a powerful and flexible approach to styling your web applications. By understanding its utility-first nature and leveraging its customization options, you can create beautiful and maintainable designs efficiently.</p>
    `
  },
  {
    id: 3,
    title: 'Web Development Best Practices',
    excerpt: 'Essential tips and tricks for modern web development. From performance to accessibility.',
    date: 'Jan 21, 2025',
    icon: CodeIcon,
    content: `
      <h2>Modern Web Development Best Practices</h2>
      <p>In today's rapidly evolving web development landscape, following best practices is crucial for creating maintainable, performant, and accessible web applications.</p>

      <h3>Performance Optimization</h3>
      <ul>
        <li>Minimize HTTP requests</li>
        <li>Optimize images and assets</li>
        <li>Use lazy loading for images and components</li>
        <li>Implement caching strategies</li>
      </ul>

      <h3>Code Quality</h3>
      <p>Maintaining high code quality is essential. Here's an example of clean code structure:</p>

      <pre><code>
// Bad
function x(a,b) {
  return a+b;
}

// Good
function add(firstNumber: number, secondNumber: number): number {
  return firstNumber + secondNumber;
}
      </code></pre>

      <h3>Accessibility (a11y)</h3>
      <p>Making your web applications accessible is not just good practice—it's essential. Here are some key points:</p>

      <ul>
        <li>Use semantic HTML elements</li>
        <li>Provide alt text for images</li>
        <li>Ensure keyboard navigation</li>
        <li>Maintain sufficient color contrast</li>
      </ul>

      <h3>Security Considerations</h3>
      <p>Security should never be an afterthought. Key security practices include:</p>

      <ul>
        <li>Input validation and sanitization</li>
        <li>HTTPS implementation</li>
        <li>Cross-Site Scripting (XSS) prevention</li>
        <li>Regular dependency updates</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Following these best practices will help you create better web applications that are more maintainable, performant, and user-friendly. Remember that web development is an ever-evolving field, so staying updated with the latest practices is crucial.</p>
    `
  }
]
