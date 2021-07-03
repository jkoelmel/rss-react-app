import NewsCard from "./NewsCard";
import TweetCard from "./TweetCard";

const BaseCard = ({post}) => {

    if(post.creator.charAt(0) !== '@'){
        return (<NewsCard post={post}/>)
    } else {
        return (<TweetCard post={post}/>)
    }

}

export default BaseCard;