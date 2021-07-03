import './App.css';
import React, {useEffect, useState} from "react";
import {Container, createMuiTheme, CssBaseline, Grid, ThemeProvider} from "@material-ui/core";
import Header from "./components/Header";
import BaseCard from "./components/BaseCard";
import Footer from "./components/Footer";
import Parser from "rss-parser";
import ap_text from "./assets/fonts/ap_text_regular.ttf";
import AdCard from "./components/AdCard";

const darkTheme = createMuiTheme({
    palette: {
        type: "dark",
        background: {
            default: 'linear-gradient(to top, #080809, #0c0c0d 50%, #100c10)'
        }
    },
    typography: {
        fontFamily: 'ap_text, Arial',
    },
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [ap_text],
            },
        },
    },
});


function App() {

    const [posts, setPosts] = useState([]);
    // to be used if loading circle is necessary, add setLoaded
    const [loaded] = useState(true);

    useEffect(() => {

        const parser = new Parser()

        const extractPosts = (items) => {
            let posts = [];
            posts = posts.concat(items);
            return posts
        }

        const filterTweets = (items) => {
            let posts = [];
            posts = posts.concat(items);
            const length = posts.length;
            let creators = [];
            // get list of creators
            for (let i = 0; i < length; i++) {
                creators = creators.concat(posts[i].creator);
            }
            // filter out duplicate tweets
            creators = posts.filter((post, index) => {
                return creators.indexOf(post.creator) === index || post.creator.charAt(0) !== '@'
            })
            return creators;
        }

        function sortPosts(a, b) {
            return new Date(b.isoDate) - new Date(a.isoDate)
        }

        const fetchPosts = async () => {
            const newsUrl = 'https://cors.cnews.workers.dev/?u=https://rss.app/feeds/_pGxlWczRReksuiI4.xml'
            const feed = await parser.parseURL(newsUrl)
            let newsPosts = extractPosts(feed.items)

            // set aside for later use
            const tweetURL = 'https://cors.cnews.workers.dev/?u=https://rss.app/feeds/_jw8DkS4aRay1YxEq.xml'
            const twitterFeed = await parser.parseURL(tweetURL)
            const tweets = filterTweets(extractPosts(twitterFeed.items))
            newsPosts = newsPosts.concat(tweets)
            newsPosts.sort(sortPosts)

            setPosts(newsPosts)
        }

        fetchPosts().then(() => {
            return null
        })
    }, [loaded])


    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Header/>
            <Container maxWidth='lg'>
                <Grid container spacing={2}>
                    {posts.map((post) => {
                        return (<BaseCard post={post} key={post.title}/>)
                    })}
                    <AdCard/>
                </Grid>
            </Container>
            <Footer/>
        </ThemeProvider>
    );
}

export default App;

