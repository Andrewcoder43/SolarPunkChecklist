import React, { useState } from 'react';
import './App.css';

const lifeEvents = [
    { emoji: '🌱', text: 'Start a garden' },
    { emoji: '🌳', text: 'Plant a tree' },
    { emoji: '🏖️', text: 'Volunteer for a beach cleanup' },
    { emoji: '🌌', text: 'Stargaze in a dark-sky' },
    { emoji: '🌿', text: 'Forage edibles' },
    { emoji: '🦉', text: 'Watch local wildlife' },
    { emoji: '♻️', text: 'Reduce waste' },
    { emoji: '🚲', text: 'Bike errands' },
    { emoji: '🌞', text: 'Install solar panels' },
    { emoji: '🧺', text: 'Shop farmers market' },
    { emoji: '🧼', text: 'Make your own cleaning products' },
    { emoji: '🔋', text: 'Use rechargeable batteries' },
    { emoji: '💧', text: 'Harvest rainwater' },
    { emoji: '🕯️', text: 'Use beeswax candles' },
    { emoji: '🌍', text: 'Join a community swap event' },
    { emoji: '🤝', text: 'Join a co-op' },
    { emoji: '🛠️', text: 'Organize a tool library' },
    { emoji: '🏡', text: 'Host a potluck' },
    { emoji: '🌐', text: 'Join a solar punk community' },
    { emoji: '🗣️', text: 'Attend a town meeting' },
    { emoji: '🎓', text: 'Take an ecology course' },
    { emoji: '🌍', text: 'Learn indigenous practices' },
    { emoji: '🧑‍🎨', text: 'Explore eco-art' },
    { emoji: '🌱', text: 'Experiment with vertical gardening' },
    { emoji: '🚶‍♂️', text: 'Hike national parks' },
    { emoji: '🏞️', text: 'Camp in eco-friendly sites' },
    { emoji: '🌌', text: 'Night hike to observe nocturnal wildlife' },
    { emoji: '🚤', text: 'Kayak local waterways' },
    { emoji: '🌄', text: 'Visit an eco-village' },
    { emoji: '🏖️', text: 'Explore eco-tourism' },
    { emoji: '🌍', text: 'Travel to sustainable hotspots' },
    { emoji: '🔭', text: 'Attend an astronomy event' },
    { emoji: '🧗‍♀️', text: 'Climb a natural rock formation' },
    { emoji: '🌿', text: 'Explore a nature immersion program' },
    { emoji: '🌍', text: 'March for the climate' },
    { emoji: '🐾', text: 'Adopt a rescue animal' },
    { emoji: '🌈', text: 'Create a rain garden' },
    { emoji: '🌸', text: 'Host a native plant swap' },
    { emoji: '🦜', text: 'Build a birdhouse' },
    { emoji: '🌿', text: 'Start a compost bin' },
    { emoji: '🌱', text: 'Organize a neighborhood clean-up' },
    { emoji: '🌊', text: 'Advocate for local waterway protection' },
    { emoji: '🌳', text: 'Create a local wildlife corridor' },
    { emoji: '🌻', text: 'Volunteer at a botanical garden' },
    { emoji: '🥗', text: 'Cook a plant-based meal' },
    { emoji: '🧺', text: 'Make reusable bags' },
    { emoji: '🛁', text: 'Install low-flow fixtures' },
    { emoji: '🔌', text: 'Use energy efficient appliances' },
    { emoji: '🏡', text: 'Green your home' },
    { emoji: '📦', text: 'Shop package-free' },
    { emoji: '🌾', text: 'Make natural dyes from plants' },
    { emoji: '🧑‍🌾', text: 'Work on a local farm' },
    { emoji: '🏭', text: 'Advocate for renewable energy' },
    { emoji: '🤲', text: 'Start a community skill-sharing group' },
    { emoji: '📅', text: 'Organize sustainable living workshops' },
    { emoji: '🎊', text: 'Celebrate Earth Day with a local festival' },
    { emoji: '🛍️', text: 'Support local artisans' },
    { emoji: '🏛️', text: 'Attend local government meetings to advocate for local policies' },
    { emoji: '📸', text: 'Document local environmental changes using photography' },
    { emoji: '🗣️', text: 'Start podcasts based around sustainability topics' },
    { emoji: '🎨', text: 'Collaborate on murals that promotes eco-awareness' },
    { emoji: '🤝', text: 'Share resources by creating a buddy system' },
    { emoji: '🌱', text: 'Learn herbal medicine' },
    { emoji: '🖋️', text: 'Start a blog' },
    { emoji: '🚵‍♀️', text: 'Take a Bike Tour' },
    { emoji: '🏕️', text: 'Survive in wilderness' },
    { emoji: '🌲', text: 'Travel to eco-friendly locations' },
    { emoji: '🚣‍♂️', text: 'Join kayaking groups' },
    { emoji: '🌍', text: 'Visit green cities' },
    { emoji: '🌿', text: 'Join a nature-based retreat' }
];

const Checklist = () => {
    const [completedItems, setCompletedItems] = useState(0);
    const [completedIndices, setCompletedIndices] = useState([]);

    const toggleItem = (index) => {
        const checkbox = document.getElementById(`checkbox-${index}`);
        if (checkbox.checked) {
            setCompletedIndices([...completedIndices, index]);
            setCompletedItems(prev => prev + 1);
        } else {
            setCompletedIndices(completedIndices.filter(i => i !== index));
            setCompletedItems(prev => prev - 1);
        }
    };

    const progressPercentage = (completedItems / lifeEvents.length) * 100;

    return (
        <div className="parent">
            <h1 style={{ fontWeight: 'bold', textAlign: 'center' }}>Solar Punk Checklist</h1>
            <div className="top-row">
                {lifeEvents.map((event, index) => (
                    <div className={`div${(index % 3) + 1} ${completedIndices.includes(index) ? 'checked' : ''}`} key={index}>
                        <input
                            type="checkbox"
                            id={`checkbox-${index}`}
                            className="checkbox"
                            onChange={() => toggleItem(index)}
                        />
                        <span className="emoji">{event.emoji}</span>
                        <span className="text">{event.text}</span>
                    </div>
                ))}
            </div>
            <div className="completion-status">
                <div className="completion-text">
                    Completed: {completedItems} / {lifeEvents.length}
                </div>
                <div className="progress-bar">
                    <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Checklist;
