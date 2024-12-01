import { ButtonPri } from "./Buttons";

export const Card = ({
    title,
    image,
    description,
    buttonText,
    onButtonClick,
}) => {
    return (
        <div className="w-80 bg-fourth-bg rounded-lg shadow-lg overflow-hidden m-4">
            {image && (
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
            )}
            <div className="p-4">
                <h3 className="text-xl font-semibold text-text-1 mb-2">
                    {title}
                </h3>
                {description && (
                    <p className="text-text-3 text-base mb-4">{description}</p>
                )}
                {buttonText && (
                    <ButtonPri handleClick={onButtonClick}>
                        {buttonText}
                    </ButtonPri>
                )}
            </div>
        </div>
    );
};
