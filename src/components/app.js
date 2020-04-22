////////////////////////////////////////////////////////////////////////////////
// FILE: app.js
// AUTHOR: David Ruvolo
// CREATED: 2020-02-29
// MODIFIED: 2020-04-22
// PURPOSE: functional component for portfolio
// DEPENDENCIES: react
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////
// BEGIN
import React, { useEffect, useState } from "react"
import ReactGA from "react-ga"
import Header from "./primary/header"
import Footer from "./primary/footer"
import Hero from "./layouts/hero"
import Main from "./layouts/main"
import Section from "./layouts/section"
import Profile from "./images/profile"
import Grid from "./layouts/grid"
import Card from "./elements/card"
import "../components/styles/index.scss"

// google analytics
ReactGA.initialize("UA-76117337-12");
ReactGA.pageview(window.location.pathname);
ReactGA.timing({
    category: 'JS Libraries',
    variable: 'load',
    value: 20, // in milliseconds
    label: 'CDN libs'
  });

// functions
function dive(currentKey, into, target) {
    for (var i in into) {
        if (into.hasOwnProperty(i)) {
            var newKey = i;
            var newVal = into[i];

            if (currentKey.length > 0) {
                newKey = "post_" + currentKey + '_' + i;
            }

            if (typeof newVal === "object") {
                dive(newKey, newVal, target);
            } else {
                target[newKey] = newVal;
            }
        }
    }
}

function flatten(arr) {
    var newObj = {};
    dive("", arr, newObj);
    return newObj;
}

// remove CDATA from text string
function parseCDATA(string) {
    return string.substring(
        string.indexOf("<![CDATA[") + 9,
        string.indexOf("]]>")
    );
}

// format time
function formatDate(string) {
    return new Date(string).toLocaleString("en-GB", { day: "numeric", date: "2-digit", month: "short", year: "numeric"});
}


// define app
function app() {

    // set state
    const [posts, setPosts] = useState("");
    useEffect(() => {
        const fetchPosts = async () => {
            const url = "https://davidruvolo51.github.io/shinytutorials/rss.xml";
            await fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.text();
                    } else {
                        throw response;
                    }
                })
                .then(data => {
                    // define parser
                    const parser = new DOMParser();
                    const result = parser.parseFromString(data, "text/xml");
                    const items = result.querySelectorAll("item")
                    let posts = [];
                    items.forEach(function (el, n) {
                        posts.push({
                            title: parseCDATA(el.querySelector("title").innerHTML),
                            abstract: parseCDATA(el.querySelector("description").innerHTML),
                            date: formatDate(el.querySelector("pubDate").innerHTML),
                            link: el.querySelector("link").innerHTML,
                            keywords: el.querySelector(":last-child").innerHTML
                        })
                    });
                    setPosts(flatten(posts))
                })
                .catch(error => {
                    console.log(error)
                })
        }
        fetchPosts();
    }, [])

    // Render
    return (
        <>
            <a className="screen-reader-text" href="main">got to main content</a>
            <Header />
            <Main>
                <Hero id="intro">
                    <Profile />
                    <h1>@dcruvolo</h1>
                    <ul>
                        <li>Gerontologist</li>
                        <li>#rstats</li>
                        <li>data viz</li>
                        <li>web dev</li>
                    </ul>
                </Hero>
                <Section id="welcome" aria-labelledby="welcome-section-title" >
                    <h2 id="welcome-section-title">Welcome!</h2>
                    <p>I'm a Gerontologist by training with an emphasis in aging and Alzheimer's disease research. I've worked on a handful of small cohort studies and large international clinical trials.</p>
                    <p>I caught the programming bug when I worked on a small study where I was introduced to R and E-Prime. I designed a computerized battery for use in clinical evaluation and fMRI tasks, and then analyzed the data in R. I was hooked immediately.</p>
                    <p>More recently, I've been building web-based applications that communicate research results using interactive visualizations. I'm also interested in building web apps for use in research and in the patient-centered healthcare decision making process. My favorite tools are R's Shiny apps framework, React, Node, and D3.</p>
                    <p>When I'm not behind the monitor, I'm usually out for a run, enjoying a nice cup of coffee, or cooking.</p>
                </Section>
                <Section id="projects" aria-labelledby="projects-section-title">
                    <h2 id="projects-section-title">Projects</h2>
                    <p>Here are some of projects that I'm working on.</p>
                    <Grid id="projects-layout" layout="33x3">
                        <Card
                            id="project-shiny-contest"
                            title="shinyTravel"
                            abstract="I built an app for the shiny 2020 contest that provides European travel destinations."
                            link="https://davidruvolo.shinyapps.io/travel-app/"
                            linkLabel="View"
                            keywords={["shinyapp"]}
                        />
                        <Card
                            id="project-shiny-tutorials"
                            title="Shiny Tutorials"
                            abstract="I started a blog where I write about building and designing shinyapps and other fun R things."
                            link="https://davidruvolo51.github.io/shinytutorials/"
                            linkLabel="View"
                            keywords={["blog"]}
                        />
                        <Card
                            id="project-accessible-shiny"
                            title="Accessible Shiny"
                            abstract="I'm developing an R package for building web accessible shiny applications."
                            link="https://github.com/davidruvolo51/accessibleshiny"
                            linkLabel="View"
                            keywords={["r-pkg"]}
                        />
                        <Card
                            id = "project-browsertools"
                            title = "browsertools"
                            abstract = "I am working on bundling JavaScript handlers into a package for use in shiny apps."
                            link = "https://github.com/davidruvolo51/browsertools"
                            linkLabel = "View"
                            keywords={["r-pkg"]}
                        />
                        <Card
                            id="project-r-react"
                            title="R + Node + React"
                            abstract="I built an app to demonstrate how to link R with node, express, and react."
                            link="https://github.com/davidruvolo51/r-react-demo"
                            linkLabel="View"
                            keywords={["r", "app"]}
                        />
                        <Card
                            id="project-r-plumber"
                            title="R + Plumber + React"
                            abstract="I developed an app that uses R Plumber as a backend and React as the client."
                            link="https://github.com/davidruvolo51/r-plumber-app"
                            linkLabel="View"
                            keywords={["r", "app"]}
                        />
                    </Grid>
                </Section>
                <Section id="blog" aria-labelledby="blog-section-title">
                    <h2 id="blog-section-title">Blog</h2>
                    <p>I started a blog where I write about shiny and other R-based projects. Here are some of my latest posts</p>
                    {
                        (typeof posts !== "undefined")
                        ? (<Grid layout="50x2">
                            <Card
                                id="blog-recent-post-a"
                                title={posts.post_0_title}
                                abstract={posts.post_0_abstract}
                                date={posts.post_0_date}
                                link={posts.post_0_link}
                                linkLabel="Read"
                                keywords={[posts.post_0_keywords]}
                            />
                            <Card
                                id="blog-recent-post-b"
                                title={posts.post_1_title}
                                abstract={posts.post_1_abstract}
                                date={posts.post_1_date}
                                link={posts.post_1_link}
                                linkLabel="Read"
                                keywords={[posts.post_1_keywords]}
                            />
                            <Card
                                id="blog-recent-post-c"
                                title={posts.post_2_title}
                                abstract={posts.post_2_abstract}
                                date={posts.post_2_date}
                                link={posts.post_2_link}
                                linkLabel="Read"
                                keywords={[posts.post_2_keywords]}
                            />
                            <Card 
                                id="blog-read-more"
                                link="https://davidruvolo51.github.io/shinytutorials/"
                                linkLabel="Read More >"
                            />
                        </Grid>
                        )
                        : (
                            <p>Unable to retrieve recent blog posts.</p>
                        )
                    }
                </Section>
            </Main>
            <Footer />
        </>
    )
}

// export
export default app;