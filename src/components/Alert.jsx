// Подключение встроенных стилей

// const alertStyles = {
//   margin: 8,
//   padding: "12px 16px",
//   borderRadius: 4,
//   color: "white",
// };

// const getBgColor = variant => {
//   switch (variant) {
//     case "info":
//       return "blue";
//     case "success":
//       return "green";
//     case "error":
//       return "red";
//     case "warning":
//       return "orange";
//     default:
//       throw new Error(`Unsupported variant prop value - ${variant}`);
//   }
// };

// export const Alert = ({children }) => {
//   return (
//     <p
//       style={{
//         ...alertStyles,
//         backgroundColor: getBgColor(variant),
//       }}
//     >
//       {children}
//     </p>
//   );
// };

// Подключение внешних таблиц + композиция стилей
// import "./Alert.css"

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   const classNames = ["alert", variant];

//   if (outlined) {
// 		classNames.push("is-outlined");
// 	}

//   if (elevated) {
// 		classNames.push("is-elevated");
// 	}

//   return <p className={classNames.join(" ")}>{children}</p>;
// };

// С использованием библиотеки clsx
// import clsx from "clsx";

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx(
//         "alert",
//         variant,
//         outlined && "is-outlined",
//         elevated && "is-elevated"
//       )}
//     >
//       {children}
//     </p>
//   );
// };

// export const Alert = ({ variant, outlined, elevated, children }) => {
//   return (
//     <p
//       className={clsx("alert", variant, {
//         "is-outlined": outlined,
//         "is-elevated": elevated,
//       })}
//     >
//       {children}
//     </p>
//   );
// };

// Подключение через Css модули
import css from "./Alert.module.css";
import clsx from "clsx";

export const Alert = ({ variant, outlined, elevated, children }) => {
  return (
    <p
       className={clsx(
        css[variant],
        outlined && css.isOutlined,
        elevated && css.isElevated
      )}
    >
      {children}
    </p>
  );
};