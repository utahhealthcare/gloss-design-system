import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

UIkit.prefix = 'gls-';

// Load UIkit Icons
UIkit.use(Icons);

// Expose UIkit globally for inline scripts or Drupal behaviors
window.UIkit = UIkit;
window.Gloss = UIkit;
export default UIkit;
