import { Toast, ToastContainer } from "react-bootstrap";

const CHECK_ICON_PATH =
  "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z";

const WARNING_ICON_PATH =
  "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z";

const VARIANTS = {
  success: { iconPath: CHECK_ICON_PATH, colorClass: "text-success" },
  warning: { iconPath: WARNING_ICON_PATH, colorClass: "text-warning" },
  danger: { iconPath: WARNING_ICON_PATH, colorClass: "text-danger" },
};

const ToastList = ({ toasts, onClose, delay = 5000 }) => (
  <ToastContainer position="top-end" className="p-3 position-fixed">
    {toasts.map(({ id, message, variant = "success" }) => {
      const { iconPath, colorClass } = VARIANTS[variant];

      return (
        <Toast key={id} onClose={() => onClose(id)} delay={delay} autohide>
          <Toast.Header>
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="currentColor"
              className={`${colorClass} me-2 flex-shrink-0`}
              aria-hidden="true"
            >
              <path d={iconPath} />
            </svg>
            <strong className="me-auto">{message}</strong>
          </Toast.Header>
        </Toast>
      );
    })}
  </ToastContainer>
);

export default ToastList;
