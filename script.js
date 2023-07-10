//1)<!DOCTYPE html> is it a tag of html? If not, what is it and why do we use it?

// Yes, <!DOCTYPE html> is indeed a tag in HTML, but it is not a regular HTML element like <div> or <p>. It is known as a document type declaration or doctype.

// The doctype declaration is used to specify the version and type of HTML being used in a document. It is placed at the very beginning of an HTML file before the <html> tag. Its purpose is to inform the web browser about the markup language version and standard to be used for rendering the web page.

// For example, <!DOCTYPE html> is the doctype declaration for HTML5, which is the latest version of HTML. The declaration tells the browser that the document should be rendered according to the rules and specifications of HTML5.

// The doctype declaration is essential because it helps the browser understand how to interpret the HTML code. Different versions of HTML have different syntax and rules, so specifying the correct doctype ensures that the web page is rendered correctly and consistently across different browsers.

// In summary, the <!DOCTYPE html> tag is a doctype declaration in HTML that specifies the version and type of HTML being used in the document, ensuring proper rendering of the web page.




//2)Explain Semantic tags in html? And why do we need it?

// Semantic tags in HTML are a set of elements that provide meaning and structure to the content within a web page. These tags convey the purpose or role of the content, making it easier for search engines, assistive technologies, and developers to understand and process the information.

// Here are some commonly used semantic tags in HTML5:

// <header>: Represents the introductory content of a page or a section, typically containing headings, logos, navigation menus, or search bars.

// <nav>: Defines a block of navigation links for navigating within the website or to external pages.

// <main>: Represents the main content of the document. There should be only one <main> element per page.

// <article>: Represents a standalone piece of content, such as a blog post, news article, or forum post, that can be independently distributed or syndicated.

// <section>: Represents a thematic grouping of content within a document. It could be used to divide the content into chapters, tabs, or different sections of a web page.

// <aside>: Represents content that is tangentially related to the main content, such as sidebars, pull quotes, or advertisements.

// <footer>: Represents the footer of a document or a section, typically containing information about the author, copyright, contact details, or related links.



// Q.3 Differentiate between HTML Tags and Elements?

// n HTML, there is a distinction between tags and elements. Let's break down the difference:

// HTML Tags:

// Tags are the markup syntax used in HTML to define elements and provide structure to the content.
// They are enclosed within angle brackets (< and >).
// Tags are used to delimit the beginning and end of an element, and they can also have attributes that provide additional information about the element.
// Examples of tags include <div>, <p>, <img>, <a>, etc.


// HTML Elements:

// Elements are made up of tags, along with the content they surround, and any attributes specified within the opening tag.
// An HTML element consists of a start tag, content, and an end tag.
// The start tag contains the tag name and any attributes, while the end tag marks the closure of the element.
// The content of an element is the information or nested elements that are placed between the opening and closing tags.
// For example, the element <p>Hello, World!</p> consists of the start tag <p>, the content "Hello, World!", and the end tag </p>


// Q.6 What are some of the advantages of HTML5 over its previous versions?


// HTML5 introduced several advancements and improvements over its previous versions, offering several advantages. Here are some key advantages of HTML5:

// Rich Multimedia Support: HTML5 provides native support for audio and video elements, eliminating the need for third-party plugins like Flash. This allows developers to embed multimedia content directly into web pages, making it easier to integrate and provide a seamless user experience.

// Canvas and Scalable Vector Graphics (SVG): HTML5 introduced the <canvas> element, which enables dynamic, scriptable rendering of graphics, animations, and interactive visualizations. Additionally, HTML5 includes native support for SVG, a scalable vector graphics format, allowing for high-quality and resolution-independent graphics.

// Improved Forms and Input Types: HTML5 introduced several new input types, such as email, date, number, and range, which simplify form validation and enhance the user experience. It also introduced the <datalist> element for providing pre-defined options in an input field and the <output> element for displaying the result of a calculation or script.

// Enhanced Semantics: HTML5 introduced new semantic elements, such as <header>, <nav>, <section>, <article>, and <footer>, which provide clearer structure and meaning to web content. These elements improve accessibility, SEO, and maintainability of web pages.

// Offline and Storage Capabilities: HTML5 introduced the Application Cache (<appcache>) and Local Storage (localStorage) APIs, allowing web applications to work offline and store data locally on the client's device. This enables offline access to previously visited pages and improves performance by reducing server requests.

// Responsive and Mobile-Friendly Design: HTML5 incorporates features like media queries and the viewport meta tag, which facilitate responsive web design. This allows developers to create websites that automatically adapt to different screen sizes and devices, providing a consistent and optimized experience across desktop and mobile platforms.



// What is the difference between <figure> tag and <img> tag?

// The <figure> tag and the <img> tag serve different purposes and are used in different contexts. Let's explore their differences:

// <img> Tag:
// The <img> tag is a self-closing tag used to embed images within an HTML document.
// It is used to define an image element and display the specified image on the web page.
// The <img> tag requires the src attribute to specify the image source (URL or file path) and the alt attribute to provide alternative text for accessibility and search engine optimization.
// The <img> tag does not have a closing tag because it does not wrap any content.
// Example: <img src="image.jpg" alt="Description of the image">

// <figure> Tag:
// The <figure> tag is used to group and contain media content, such as images, illustrations, diagrams, videos, or code snippets.
// It represents a stand-alone content block that is typically referenced in the main document flow.
// The <figure> tag is often used in conjunction with the <figcaption> tag, which provides a caption or description for the media content within the <figure> element.
// It is useful when you want to associate a caption or description with the media content that it contains


// What’s the difference between html tag and attribute and give example of some global attributes?

// These attributes provide general functionality and are not limited to a particular element. Some examples of global attributes are:

// class: Specifies one or more CSS classes to associate with an element, allowing for styling and targeting via CSS or JavaScript.

// id: Assigns a unique identifier to an element, which can be used for referencing or styling purposes. Each id value must be unique within the HTML document.

// style: Defines inline CSS styles to be applied directly to an element. It allows for setting properties like color, font size, margin, etc.

// title: Provides a title or tooltip text that is displayed when the user hovers over the element.

// data-*: Allows the inclusion of custom data attributes. The data-* attributes provide a way to store custom data that can be accessed and manipulated using JavaScript.