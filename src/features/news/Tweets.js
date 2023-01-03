
import TweetEmbed from "react-tweet-embed";

const Tweets = (props) => {
    return(
        <div>
            <TweetEmbed id={props.tweet_url.split("/")[5]} />
            
            
            
        
            
        </div>
    );
}
export default Tweets;