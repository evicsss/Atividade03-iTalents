const ResultComponent = ({ score, totalQuestions }) => {
    return (
        <div className="result">
            <h2>Resultados</h2>
            <p>Pontuação: {score} de {totalQuestions}</p>
            <p>{score / totalQuestions > 0.5 ? "Conhece muito!" : "Tente novamente!"}</p>
        </div>
    );
};

export default ResultComponent;
