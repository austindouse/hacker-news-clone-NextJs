const StoryList = ({stories}) => (
  <div className="story-list">
    {stories.map((story) => {
      return (
        <div className="story" key={story.id}>
          <h2 className="story-title">
            <a href={story.url}> {story.title}</a>
          </h2>
          <div className="story-details"></div>
        </div>
      );
    })}
  </div>
);

export default StoryList;
