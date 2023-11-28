import React, { useEffect, useRef, useState } from 'react';
// import './styles.css';

const TagComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const tagContainerRef = useRef(null);

  useEffect(() => {
    const tagContainer = tagContainerRef.current;

    const handleIntersection = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    const observer = new IntersectionObserver(handleIntersection, {
      rootMargin: '0px',
      threshold: 0.5,
    });

    if (tagContainer) {
      observer.observe(tagContainer);
    }

    return () => {
      if (tagContainer) {
        observer.unobserve(tagContainer);
      }
    };
  }, []);

  const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5', 'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10', 'Tag 11', 'Tag 12', 'Tag 13', 'Tag 14', 'Tag 15', 'Tag 16', 'Tag 17', 'Tag 18', 'Tag 19', 'Tag 20'];

  return (
    <div style={{ height: '100vh' }}>
      <div style={{ height: '3500px' }}></div>
      <div ref={tagContainerRef} className={`tag-container ${isVisible ? 'visible' : ''}`}>
        {tags.map((tag, index) => (
          <div key={index} className="tag" style={{ animationDelay: `${index * 100}ms` }}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagComponent;
