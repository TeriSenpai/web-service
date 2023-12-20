import React from "react";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';

const STEPS = [
	{
		title: "Проект 1",
		subtitle: "Ваш будующий проект 1"
	},
	{
		title: "Проект 2",
		subtitle: "Ваш будующий проект 2"
	},
	{
		title: "Проект 3",
		subtitle: "Ваш будующий проект 3"
	},
];

const Step = ({ step }) => {
	return (
		<div className="flex-1 py-4 px-4">
      <img
        src="https://s3-alpha.figma.com/thumbnails/a8e0fe81-0924-436d-9160-84fdd47f1bfb?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQ4GOSFWCQKCM3SKC%2F20231217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20231217T120000Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9760bd586bcd3e914f5744a74c5f038e1fb1a88ef955ec3b59cc080f7853381e"
        alt="Шаг 1"
        className="w-full h-64 bg-midnight-blue rounded-lg"
      />
      <div className="mt-4">
        <p className="text-2xl text-gray-600 font-bold mb-2 text-center md:text-left">
          {step.title}
        </p>
        <p className="text-lg text-midnight-blue font-medium text-center md:text-left">
          {step.subtitle}
        </p>
      </div>
    </div>
	);
}

const HowItWorks = ({ title, subtitle }) => {
	return (
		<div>
			<div className="m-auto max-w-2xl">
				<h2 className="text-midnight-blue text-5xl md:text-6xl font-bold mt-4 text-center">
					{title}
				</h2>
				<p className="text-center text-2xl font-medium my-8 text-gray-600">
					{subtitle}
				</p>
			</div>
			<div className="md:flex justify-around m-auto max-w-6xl py-8 md:py-16">
				{STEPS.map((s, index) => {
					return (
						<Step
							step={s}
							key={`Step-${index}`}
						/> 
					);
				})}
			</div>
		</div>
	);
};

export default HowItWorks;
