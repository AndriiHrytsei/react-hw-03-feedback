export default function FeedbackOptions({ options, onLeaveFeedback }){
    return(
        <>
            {/* <button onClick={onLeaveFeedback.good} className="good-btn" type="button">Good</button> */}
            {/* <button onClick={onLeaveFeedback.neutral} className="neutral-btn" type="button">Neutral</button> */}
            {/* <button onClick={onLeaveFeedback.bad} className="bad-btn" type="button">Bad</button> */}
            {options.map(option => (
                <button key={option} name={option} onClick={onLeaveFeedback} className="btn" type="button">{option}</button>
            ))}
        </>
    )
}