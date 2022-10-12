import React from 'react'

function Panel() {
  return (
    <>
        <div class="topnav">
                <div class="container-fluid">
                    <nav class="navbar navbar-light navbar-expand-lg topnav-menu">

                        <div class="collapse main_nav navbar-collapse" id="topnav-menu-content">
                            <ul class="navbar-nav">
                                
                                {/* section 1 */}
                                <li class="nav-item dropdown" style={{marginRight: '20px'}}>
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                    >
                                        <i class="bx bx-home-circle me-2"></i><span key="t-dashboards">Dashboards</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-dashboard">

                                        <a href="index.html" class="dropdown-item" key="t-default">Default</a>
                                        <a href="dashboard-saas.html" class="dropdown-item" key="t-saas">Saas</a>
                                        <a href="dashboard-crypto.html" class="dropdown-item" key="t-crypto">Crypto</a>
                                        <a href="dashboard-blog.html" class="dropdown-item" key="t-blog">Blog</a>
                                        <a href="dashboard-job.html" class="dropdown-item" key="t-Jobs">Jobs</a>
                                    </div>
                                </li>

                                {/* section 2 */}
                                <li class="nav-item dropdown" style={{marginRight: '20px'}}>
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-uielement" role="button"
                                    >
                                        <i class="bx bx-tone me-2"></i>
                                        <span key="t-ui-elements"> UI Elements</span> 
                                        <div class="arrow-down"></div>
                                    </a>

                                    <div class="dropdown-menu mega-dropdown-menu px-2 dropdown-mega-menu-xl"
                                        aria-labelledby="topnav-uielement">
                                        <div class="row">
                                            <div class="col-lg-4">
                                                <div>
                                                    <a href="ui-alerts.html" class="dropdown-item" key="t-alerts">Alerts</a>
                                                    <a href="ui-buttons.html" class="dropdown-item" key="t-buttons">Buttons</a>
                                                    <a href="ui-cards.html" class="dropdown-item" key="t-cards">Cards</a>
                                                    <a href="ui-carousel.html" class="dropdown-item" key="t-carousel">Carousel</a>
                                                    <a href="ui-dropdowns.html" class="dropdown-item" key="t-dropdowns">Dropdowns</a>
                                                    <a href="ui-grid.html" class="dropdown-item" key="t-grid">Grid</a>
                                                    <a href="ui-images.html" class="dropdown-item" key="t-images">Images</a>
                                                    <a href="ui-lightbox.html" class="dropdown-item" key="t-lightbox">Lightbox</a>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <a href="ui-modals.html" class="dropdown-item" key="t-modals">Modals</a>
                                                    <a href="ui-offcanvas.html" class="dropdown-item" key="t-offcanvas">Offcanvas</a>
                                                    <a href="ui-rangeslider.html" class="dropdown-item" key="t-range-slider">Range Slider</a>
                                                    <a href="ui-session-timeout.html" class="dropdown-item" key="t-session-timeout">Session Timeout</a>
                                                    <a href="ui-progressbars.html" class="dropdown-item" key="t-progress-bars">Progress Bars</a>
                                                    <a href="ui-placeholders.html" class="dropdown-item" key="t-placeholders">Placeholders</a>
                                                    <a href="ui-sweet-alert.html" class="dropdown-item" key="t-sweet-alert">Sweet-Alert</a>
                                                    <a href="ui-tabs-accordions.html" class="dropdown-item" key="t-tabs-accordions">Tabs & Accordions</a>
                                                </div>
                                            </div>
                                            <div class="col-lg-4">
                                                <div>
                                                    <a href="ui-typography.html" class="dropdown-item" key="t-typography">Typography</a>
                                                    <a href="ui-toasts.html" class="dropdown-item" key="t-toasts">Toasts</a>
                                                    <a href="ui-video.html" class="dropdown-item" key="t-video">Video</a>
                                                    <a href="ui-general.html" class="dropdown-item" key="t-general">General</a>
                                                    <a href="ui-colors.html" class="dropdown-item" key="t-colors">Colors</a>
                                                    <a href="ui-rating.html" class="dropdown-item" key="t-rating">Rating</a>
                                                    <a href="ui-notifications.html" class="dropdown-item" key="t-notifications">Notifications</a>
                                                    <a href="ui-utilities.html" class="dropdown-item" key="t-utilities">Utilities</a>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </li>


                                {/* section 3 */}
                                <li class="nav-item dropdown" style={{marginRight: '20px'}}>
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                    >
                                        <i class="bx bx-home-circle me-2"></i><span key="t-dashboards">Dashboards</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-dashboard">

                                        <a href="index.html" class="dropdown-item" key="t-default">Default</a>
                                        <a href="dashboard-saas.html" class="dropdown-item" key="t-saas">Saas</a>
                                        <a href="dashboard-crypto.html" class="dropdown-item" key="t-crypto">Crypto</a>
                                        <a href="dashboard-blog.html" class="dropdown-item" key="t-blog">Blog</a>
                                        <a href="dashboard-job.html" class="dropdown-item" key="t-Jobs">Jobs</a>
                                    </div>
                                </li>

                                 {/* section 4 */}
                                 <li class="nav-item dropdown" style={{marginRight: '20px'}}>
                                    <a class="nav-link dropdown-toggle arrow-none" href="#" id="topnav-dashboard" role="button"
                                    >
                                        <i class="bx bx-home-circle me-2"></i><span key="t-dashboards">Dashboards</span> <div class="arrow-down"></div>
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="topnav-dashboard">

                                        <a href="index.html" class="dropdown-item" key="t-default">Default</a>
                                        <a href="dashboard-saas.html" class="dropdown-item" key="t-saas">Saas</a>
                                        <a href="dashboard-crypto.html" class="dropdown-item" key="t-crypto">Crypto</a>
                                        <a href="dashboard-blog.html" class="dropdown-item" key="t-blog">Blog</a>
                                        <a href="dashboard-job.html" class="dropdown-item" key="t-Jobs">Jobs</a>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
    </>
  )
}

export default Panel