// Import React
import React from "react";

// {" You don't want to code out what I'm thinking" - Kah Kong}
// " Girl nerd = ugly" - Jia Rong
// " I don't bullshit" - Kah Kong
// "I think our pay is pegged to Mumbai pay" - Yong Wen
// " Close friends cannot become couples" - Jia Rong
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  kat: require("../assets/kat.png"),
  aizen: require("../assets/aizen.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  cocoon: require("../assets/cocoon.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "orange"
}
,{
  primary: "Source Sans Pro"
});

// const theme = createTheme({
//   primary: "red"
// }, {
//   primary: "Helvetica"
// })


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={300} controls={false}>
          <Slide bgColor="black">
            <Heading size={1} fill caps lineHeight={1} textColor="primary">
              Single Page Applications
            </Heading>
            <Text textAlign="left" textColor="white" textSize="0.7em" margin="20px 0px 0px">Made with <Link href="https://github.com/FormidableLabs/spectacle">Spectacle</Link></Text>
          </Slide>

          <Slide bgImage={images.aizen} bgDarken={0.85} >
            <Heading size={1} caps textColor="tertiary" margin={0} lineHeight={1.2} fit>
              History of BGP
            </Heading>
            <BlockQuote >
              <Quote textSize='1.2em'>"BGP is like Naruto. You think this form is difficult, wait for the next
                form" </Quote>
              <Cite>Yew Lee</Cite>
            </BlockQuote>
          </Slide>

          <Slide notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <Heading size={1} caps lineHeight={1} textAlign="left">
              Pure Rails
            </Heading>

            <List>
              <Appear><ListItem>Action View to render page</ListItem></Appear>
              <Appear><ListItem><Code>$</Code> to bind events</ListItem></Appear>
              <Appear><ListItem><Code>$</Code> to manipulate <Code>DOM</Code> to get interactivity</ListItem></Appear>
            </List>
          </Slide>


          <Slide bgImage={images.cocoon} bgDarken={0.7} notes="Dont talk to samuel about this">
            <Heading size={1} caps fit textColor="white">
              Attachment (Cocoon)
            </Heading>
            <List textColor="primary">
              <Appear><ListItem><Code textColor="primary">DOM</Code> needed to render an accordion is placed in
                <Code textColor="primary">data-attribute</Code></ListItem></Appear>
              <Appear><ListItem>Ajax to server <Code textColor="primary">onClick</Code></ListItem></Appear>
            </List>
            <Appear>
              <CodePane
                textSize={20}
                lang="javascript"
                source={require("raw!../assets/cocoon-code.js")}>
              </CodePane>
            </Appear>
          </Slide>

          <Slide notes="2 sets of SPA not exactly ideal. pre login/forms">
            <Heading size={1} caps textAlign="left">SPA now?</Heading>
            <List>
              <Appear><ListItem>2 sets of SPA</ListItem></Appear>
              <Appear><ListItem>Store all the data as javascript objects</ListItem></Appear>
              <Appear><ListItem>Render view according to data</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="Almost nothing to learn">
            <Heading size={1} fit>What's good about server rendering?</Heading>
            <List>

              <Appear><ListItem>Fast/Easy<CodePane margin={10} textSize={20}
                                                   source="<div>Name: <%= person.name %><br></div>"></CodePane></ListItem></Appear>
              <Appear><ListItem bold>SEO</ListItem></Appear>
              <Appear><ListItem bold>Routing</ListItem></Appear>
              <Appear><ListItem bold>Legacy browsers</ListItem></Appear>
            </List>
          </Slide>


          <Slide notes="Almost nothing to learn">
            <Heading size={1} fit>What about client rendering? (SPA)</Heading>
            <List>

              <Appear><ListItem>Javascript objects easy to work with for complex interactions</ListItem></Appear>
              <Appear><ListItem>Faster than mutating <Code>DOM</Code></ListItem></Appear>
              <Appear><ListItem>Separation of concerns</ListItem></Appear>
              <Appear><ListItem> Microservices & scaling</ListItem></Appear>
            </List>
          </Slide>




          <Slide>
            <Heading caps fit>Flexible Layouts</Heading>
            <Layout>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Left
                </Heading>
              </Fill>
              <Fill>
                <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                  Right
                </Heading>
              </Fill>
            </Layout>
          </Slide>
          <Slide transition={["slide"]} bgColor="black">
            <Heading size={1} caps textColor="tertiary" margin={0} lineHeight={1.2} fit>
              Complexity
            </Heading>
            <BlockQuote >
              <Quote textSize='1.2em'>"BGP is like Naruto. You think this form is difficult, wait for the next
                form" </Quote>
              <Cite>Yew Lee</Cite>
            </BlockQuote>

          </Slide>
          <Slide transition={["spin", "zoom"]} bgColor="tertiary">
            <Heading caps fit size={1} textColor="primary">
              Inline Markdown
            </Heading>
            <Markdown>
              {`
![Markdown Logo](${images.markdown.replace("/", "")})

You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
* Lists too!
* With ~~strikethrough~~ and _italic_
* And lets not forget **bold**
              `}
            </Markdown>
          </Slide>
          <Slide transition={["slide", "spin"]} bgColor="primary">
            <Heading caps fit size={1} textColor="tertiary">
              Smooth
            </Heading>
            <Heading caps fit size={1} textColor="secondary">
              Combinable Transitions
            </Heading>
          </Slide>
          <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
            <List>
              <Appear><ListItem>Inline style based theme system</ListItem></Appear>
              <Appear><ListItem>Autofit text</ListItem></Appear>
              <Appear><ListItem>Flexbox layout system</ListItem></Appear>
              <Appear><ListItem>React-Router navigation</ListItem></Appear>
              <Appear><ListItem>PDF export</ListItem></Appear>
              <Appear><ListItem>And...</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={1} caps fit textColor="tertiary">
              Your presentations are interactive
            </Heading>
            <Interactive/>
          </Slide>
          <Slide transition={["spin", "slide"]} bgColor="tertiary">
            <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
              Made with love in Seattle by
            </Heading>
            <Link href="http://www.formidablelabs.com"><Image width="100%" src={images.logo}/></Link>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
