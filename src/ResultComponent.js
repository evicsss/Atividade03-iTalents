const ResultComponent = ({ score, totalQuestions }) => {
    return (
        <div className="result">
            <h2>Resultados</h2>
            <p>Pontuação: {score} de {totalQuestions}</p>
            <p>{score / totalQuestions > 0.5 ? "Bom trabalho!" : "Tente novamente!"}</p>
        </div>
    );
};

export default ResultComponent;
