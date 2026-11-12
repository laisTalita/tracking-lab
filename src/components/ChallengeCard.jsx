function ChallengeCard({ challenge, onSelect }) {
    return (
        <div
            className="challenge-card"
            onClick={() => onSelect(challenge)}
        >
            <span className="card-level">
                {challenge.difficulty}
            </span>

            <div className="container">
                <p className="card-title">{challenge.title}</p>
                <p className="card-category">{challenge.category}</p>
                <p className="card-architecture">{challenge.architecture}</p>
            </div>
        </div>
    )
}

export default ChallengeCard