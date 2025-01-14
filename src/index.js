import { HelloWorld } from './components/HelloWorld';

/**
 * Initialize the application
 * @param {HTMLElement} container - The container element
 */
function init(container) {
    container.appendChild(HelloWorld());
}

export default { init };
