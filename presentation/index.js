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

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  microservices: require("../assets/microservices.png"),
  aizen: require("../assets/aizen.jpg"),
  isomorphic: require("../assets/isomorphic.png"),
  cocoon: require("../assets/cocoon.jpg"),
  dio: require("../assets/dio.jpg")
};

preloader(images);

const theme = createTheme({
    primary: "#ff4d00"
  }
  , {
    primary: "Source Sans Pro"
  }
);



export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={300} controls={false}>
          <Slide bgColor="black">
            <Heading size={1} fill caps lineHeight={1} textColor="primary">
              Single Page Applications
            </Heading>
            <Text textAlign="left" textColor="white" textSize="0.7em" margin="20px 0px 0px">Made with <Link
              href="https://github.com/FormidableLabs/spectacle">Spectacle</Link></Text>
          </Slide>

          <Slide bgImage={images.aizen} bgDarken={0.8}>
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


          <Slide bgImage={images.cocoon} bgDarken={0.7} notes="For attachment, we use a gem called cocoon.
          <br> Dont talk to samuel about this.
          <br>After insert, grab the markup that is contained inside data attribute">
            <Heading size={1} caps fit textColor="white">
              Attachment (Cocoon)
            </Heading>
            <List textColor="primary">
              <Appear><ListItem><Code textColor="primary">DOM</Code> needed to render an accordion is placed in
                <Code textColor="primary">data-attribute</Code></ListItem></Appear>
              <Appear><ListItem>AJAX to server <Code textColor="primary">onClick</Code></ListItem></Appear>
            </List>
            <Appear>
              <CodePane
                textSize={20}
                lang="javascript"
                source={require("raw!../assets/cocoon-code.js")}>
              </CodePane>
            </Appear>
          </Slide>

          <Slide notes="2 sets of SPA not exactly ideal. <br> pre login and forms">
            <Heading size={1} caps textAlign="left">Now</Heading>
            <List>
              <Appear><ListItem>2 SPA</ListItem></Appear>
              <Appear><ListItem>Store all the data as javascript objects</ListItem></Appear>
              <Appear><ListItem>Render view according to data</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="Almost nothing to learn <br> SEO/Router will talk about it later. <br> All browsers can parse html">
            <Heading size={1} fit>What's good about server rendering?</Heading>
            <List>

              <Appear><ListItem>Fast/Easy<CodePane margin={5} textSize={20}
                                                   source="<div>Name: <%= person.name %><br></div>"></CodePane></ListItem></Appear>
              <Appear><ListItem bold>SEO</ListItem></Appear>
              <Appear><ListItem bold>Routing</ListItem></Appear>
              <Appear><ListItem>Legacy browsers</ListItem></Appear>
            </List>
          </Slide>


          <Slide notes="We change the data then render the view <br>
          DOM changes are slow. Lots of lag when using cocoon <br>">
            <Heading size={1} fit>What about client rendering? (SPA)</Heading>
            <List>

              <Appear><ListItem>Javascript objects easy to work with for complex interactions</ListItem></Appear>
              <Appear><ListItem>Faster than mutating <Code>DOM</Code></ListItem></Appear>
              <Appear><ListItem bold>Separation of concerns</ListItem></Appear>
              <Appear><ListItem bold>Microservices & scaling</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="Android, IO app can use the same backend<br/>Open up API for public consumption. <br> frontend and backend teams can work independently">
            <Heading size={1} fit>Separation of concerns</Heading>
            <List>
              <Appear><ListItem>Mobile Apps</ListItem></Appear>
              <Appear><ListItem>Public API</ListItem></Appear>
              <Appear><ListItem>Parallel Development <br/>(JSON schema to standardize API)</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="Problem of JSON is that it is not typed and it is very dynamic. To work independently we define a JSON schema.">
            <Heading size={2} fill textAlign="left" textColor="white">JSON Schema</Heading>
            <List>
              <Appear>
                <CodePane
                  textSize={15}
                  lang="javascript"
                  source={require("raw!../assets/json-schema.json")}/>
              </Appear>
            </List>
          </Slide>

          <Slide notes="html not even there in first place. <br> Online services to help execute the javascript and serve html to the robots">
            <Heading size={1} fill textAlign="left">SEO</Heading>
            <List>
              <Appear><ListItem>Robots can only parse html text</ListItem></Appear>
              <Appear><ListItem>Cannot execute javascript and parse output</ListItem></Appear>
              <Appear><ListItem><Link href="https://prerender.io/">Prerender.io</Link></ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="ejs kind of syntax runs on frontend server.
          <br/> Also sent the javascript along
          <br> Because there are no differences in DOM, there is no rerendering.
          <br> Listeners are then hooked onto the virtual DOM">
            <Heading size={2} margin={20} fit textColor="white">Isomorphic Javascript</Heading>
            <Layout>
              <Fill>
                <Image display="inherit" height="80%" src={images.isomorphic}/>
              </Fill>
              <Fill>
                <CodePane textSize={16}
                          source={require("raw!../assets/isomorphic.ejs")}/>
                <List>
                  <Appear><ListItem>Script runs, loads component</ListItem></Appear>
                  <Appear><ListItem>Diff with <Code>DOM</Code></ListItem></Appear>
                  <Appear><ListItem>Listen for events</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide notes="Frontend act as a wrapper. can scale easily.">
            <Heading size={1} fit textColor="white">Microservices & API Gateway</Heading>
            <Layout>
              <Fill>
                <Image margin={20} display="inherit" width="100%" src={images.microservices}/>
              </Fill>
              <Fill>
                <List margin={20} textAlign="right">
                  <Appear><ListItem><Link href="https://en.wikipedia.org/wiki/Facade_pattern">Facade Pattern</Link> </ListItem></Appear>
                  <Appear><ListItem>Falcor (Netflix)</ListItem></Appear>
                  <Appear><ListItem>GraphQl (Facebook)</ListItem></Appear>
                </List>
              </Fill>
            </Layout>
          </Slide>

          <Slide notes="Straightforward in server rendered pages. Server do routing
          <br> Hash routing
          <br> react router use browser hooks. Just like the current slide
          <br> load the entire JS file, let frontend handle routing" id="routing">
            <Heading size={1} textAlign="left">Routing</Heading>
            <List>
              <Appear><ListItem><Code>/grants/#/form/eligibility</Code></ListItem></Appear>
              <Appear><ListItem>Hook browser APIs to display <Code>/grants/form/eligibility</Code> when triggering link</ListItem></Appear>
              <Appear><ListItem>Server needs to handle case when URL is entered directly</ListItem></Appear>
            </List>
          </Slide>

          <Slide notes="Webpack search through each async line, compiles bundles and assign unique IDs <br> Downloads using unique IDs">
            <Heading size={1} fit>Asynchronous Loading</Heading>
            <List>
              <Appear><ListItem>Loading the entire app is slowy</ListItem></Appear>
              <Appear><ListItem>Webpack<CodePane margin={5} textSize={20} lang="javascript"
                                                 source={require("raw!../assets/webpack.js")}></CodePane></ListItem></Appear>
              <Appear><ListItem>Downloads the bundle when the code is executed</ListItem></Appear>
            </List>
          </Slide>

          <Slide bgImage={images.dio} bgDarken={0.7} id="end">
            <Heading size={1} caps fit textColor="tertiary" margin={0}>
             the end
            </Heading>
            <BlockQuote >
              <Quote textSize='1.8em'>"You don't want to code out what I'm thinking" </Quote>
              <Cite>Kah Kong</Cite>
            </BlockQuote>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
