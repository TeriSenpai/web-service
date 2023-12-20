import React, { useState } from "react";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const QUESTIONS = [
	{
		question: "Как начать работу с вашим сервисом?",
		answer: "Процесс начала работы прост и интуитивен. Зарегистрируйтесь на нашем сайте, создайте проект, добавьте необходимые материалы, и ваш проект будет готов к запуску. Наша платформа позволяет вам следить за ходом реализации и взаимодействовать с другими участниками."
	},
	{
		question: "Как я могу найти соучастников для своего проекта?",
		answer: "Наши инструменты обеспечивают простой способ поиска соучастников. Вы можете указать требования и навыки, которые вам нужны, а также просматривать профили других участников, интересующихся подобными проектами."
	},
	{
		question: "Как обеспечивается конфиденциальность моих идей и проектов?",
		answer: " Мы придаем большое значение безопасности и конфиденциальности. Все проекты защищены политикой конфиденциальности, и доступ к ним предоставляется только участникам, которых вы лично пригласили в свой проект."
	},
	{
		question: "Как связаться с поддержкой, если у меня возникнут вопросы?",
		answer: "Если у вас возникли вопросы или вам нужна помощь, свяжитесь с нашей службой поддержки по электронной почте: support@gmail.com. Мы готовы помочь вам в любых вопросах и обеспечить комфортное использование нашего сервиса."
	},
];

const Question = ({ question }) => {
	const [isOpen, setIsOpen] = useState(false);
	
	const handleOpen = () => {
		setIsOpen(!isOpen);
	}
	
	return (
		<div className="px-2 py-4 border-b-2">
			<div 
				onClick={handleOpen}
				className="flex items-top"
			>
				<FontAwesomeIcon 
					icon={isOpen ? faMinus : faPlus} 
					className="text-primary text-xl mt-2"
				/>
				<h2 className="text-midnight-blue text-2xl font-bold ml-2">
					{question.question}
				</h2>
			</div>
			{isOpen && (
				<p className="text-gray-600 text-lg mt-2">
					{question.answer}
				</p>
			)}
		</div>
	);
}

const FAQ = () => {
	return (
		<div className="m-auto max-w-2xl">
			<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold text-center mb-8">
			Часто задаваемые вопросы
				<span className="text-transparent text-primary underline-offset-2">
					{` FAQ`}
				</span>
			</h2>
			{QUESTIONS.map((q, index) => {
				return (
					<Question 
						question={q}
						key={`Question-${q}`}
					/>
				);
			})}
		</div>
	);
}

export default FAQ;
