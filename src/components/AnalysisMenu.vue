<template>
  <section class="el-container container-settingHome is-vertical">
    <!-- <header class="el-header" style="height: 60px;">
      <nav data-v-273cece6 class="nav-bar">
        <div data-v-273cece6 class="brand">
          <img
            data-v-273cece6
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAABBCAYAAAA36tphAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3BpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphZjAzZDM3Zi00OWVmLTQ5OWMtYjcyYi0yNTA3NzNmMGQ0MzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkwMkRCNEZCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkwMkRCNEVCQzRDMTFFOUI2MkZDMUU0RjY0ODE1QkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpEREY2REJENTcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpEREY2REJENjcxNTIxMUU4QjUzNDgxRTkwMzg3RTI3RCIvPiA8L3Jk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"
            alt
          />
        </div>
        <div data-v-273cece6 class="navbar-right">
          <span data-v-273cece6 class>
            <i data-v-273cece6 class="fa fa-file-text"></i> 我的分析
          </span>
          <span data-v-273cece6 class="active">
            <i data-v-273cece6 class="fa fa-bar-chart"></i> 分析配置
          </span>
          <div data-v-273cece6 class="el-dropdown">
            <span
              data-v-273cece6
              class="el-dropdown-link el-dropdown-selfdefine"
              aria-haspopup="list"
              aria-controls="dropdown-menu-3733"
              role="button"
              tabindex="0"
            >
              <i data-v-273cece6 class="fa fa-user-circle"></i>
              <span data-v-273cece6 class="pl0">return0</span>
              <i data-v-273cece6 class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <ul
              data-v-273cece6
              class="el-dropdown-menu el-popper"
              id="dropdown-menu-3733"
              style="display: none;"
            >
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">个人中心</li>
              </span>
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">个人权益</li>
              </span>
              <span data-v-273cece6>
                <li data-v-273cece6 tabindex="-1" class="el-dropdown-menu__item">退出</li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </header> -->
    <main class="el-main">
      <div class="wrapper-grids el-row">
        <div class="el-col el-col-6">
          <div>
            <router-link to="Dictionary">
              <div class="el-card grid grid1 is-always-shadow">
                <div class="el-card__header">
                  <div class="header header1"></div>
                </div>
                <div class="el-card__body">
                  <div class="body">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAIAAACSfiL2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUY3QUEzOUE0MzBFMTFFOUI5RTdGQTNDNDBGM0JGQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUY3QUEzOUI0MzBFMTFFOUI5RTdGQTNDNDBGM0JGQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpBRjdBQTM5ODQzMEUxMUU5QjlFN0ZBM0M0MEYzQkZBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpBRjdBQTM5OTQzMEUxMUU5QjlFN0ZBM0M0MEYzQkZBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpGpJC4AABH/SURBVHja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"
                      alt
                    />
                    <p class="title" style="color: rgb(252, 108, 108);">分词词典(这里跳转事件词典)</p>
                    <p class="text">中文的分词存在歧义，需要进行调整以满足需求。用户可以自定义地添加规则，以便得到更符合自己需求的结果。</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="el-col el-col-6">
          <div>
            <router-link to="EventExtract">
              <div class="el-card grid grid2 is-always-shadow">
                <div class="el-card__header">
                  <div class="header header2"></div>
                </div>
                <div class="el-card__body">
                  <div class="body">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAIAAACSfiL2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUY3QUEzOTY0MzBFMTFFOUI5RTdGQTNDNDBGM0JGQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUY3QUEzOTc0MzBFMTFFOUI5RTdGQTNDNDBGM0JGQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNzY4MTZDRDQyOTAxMUU5QjlFN0ZBM0M0MEYzQkZBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNzY4MTZDRTQyOTAxMUU5QjlFN0ZBM0M0MEYzQkZBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PutkjzkAAAyMSURBVHja7F0LUBNnHt9X3glJIICA+EAK9dlDEW2tIHr4th21PnrO2F5v7Ex7Z+XmnOlpT8Fpr3RqnbaO53jO3OhUz5GW0oPaelpHqkUdfFYEmVIqx7uEkARCyHN37w8hNG4gyaa7TkP3D8OQb3e//fb3/b/f//F93walaRoRhL1gAgQCcAJwAnACcIIIwAnACcAJwAnACSIAJwD3CxOC7QVXrlypqakxmUydnZ0URWEYC+hJkhSLxePGjVOr1VlZWU888UQEI0eHJm63++jRo3PmzJHJZJzc14PdsWPH6MiUkIBrbGxcvHgxTz23fv160N8xCFxdXd348eN51XpQPaPROKaAs1qtGRkZj4Ax1q1bF1nABTEOBw4cuHPnjn+5XC6XSqVgHNgChOO4xWJxOp2M8tLS0uLi4k2bNkWKbUADpM6BesDwtbS0+BZOmjRpx44dTz31FLC7//MH8X0wjCAIvV5fVlb24YcfgsHxPZqdnX3p0qURL3T9r8FWcZY0GsUzM+S5y1GRmFdQHHdvkoZO0ZR00aTUcKzqZ599xjg5NTW1ubmZE1X/5JNPRCKRb+Varba+vt7/THvt3fbfLW9ZmNayZGbTgjTjwbf5G4CUw248+PfWFXObcqa1rF/UW3pytDMDeWHgrzFK9u/fn5yczEmvPvfcc1u3bmUo+PXr1/07tq/kI+eDeiQuAdHqUJWq/3y5/U4VT7pmKf13b/FxCqGxmFjSaDAfec9R+y3ryKG1tdX3o0ajAT+Ow1bm5uYySvzHPmk2ujpaMbUGxXAURK4ApXA1/cDXIL1xBZNIUaUaBTKOjsEo2lFVyRo4YHHfjyqVClx/XskFWssErruL7DWjYslw8IHJlZhWx0ssMAgHSuCD/w4aAJHYpW9nDRwQue9H4HJugWMYh1FOctEuF4KiQ7YMgjwFX8ANPvNPPQf6Dfi5DXpkJPv5iw/yxWJMLEa8fg89+OOFkWsPw/vHt3pMpojI7Aiu0mBRWpr06iaGU7Y+ymzk416UtY+22RAU95olChAkwCiN1FG/dOBQuRKVyREvRaCEyG02utub+biXq60JKkcI0TDngZeLa2MiUuMwhYLQ6Win4ycfGsXcLU28APegwdX1IyoeBo5GSLcoaXykJjKJ5MlgbodpDjwSZ+23ZFcn977I/W8HhuqwxrldiFqDj58UqcCJ02YQ6mjE5XXxxBJ3W7P9eiW3d3G3tzhuV2FK1bBNpfr7RClpo0VdEQCcdEYGHhsPfq+X5gjwDvq++hzhdIFaf8V/qY5WROpN01IkQtGS9Jnow3FhJAGHyuWS2fMR8OZo72hVqpz3q/s+/5gzdWtr7v+yFJHJID4Z4jebjdDFybLzRiXfiMjhyJesxDRaym4b8rNEYmC9nhP/dDV+z0HAQFHmIwecHS3AnkMxA3gitn5J5gJxanpkAyeeki57chHd20MjlOfBsCg1aezqfncPZTb9zMp7j75vv1qBaWIQFPOwG6gbplCpng2UHIyY6UHVhhfE8YmIpXfIHQXsomOd9fe79v3Z3dkRdrU9xw/3fnoCUaoGuMxDmhRJ9RjleavF6dPHAnCiiSmKTb+n7A7a6fRgh4JPFx3juHPdsHeH/d5tthWSPWbTewV9Hx0Gg4CCTfCgBsbUZJSkT4/asi2Ig4lEjijXbZEvWUF2/TgQSAB2NA1cjsclOH+o7973F6C8EJ07IDXb1+e6d//RAgZBrcWA2oZR6zFBrKL+01+J6CB5BCKCgENRNDr/b+4f2x3Vt/D4BNA4zwPj0TFUv7X3+D/6L34pW7hEnr2UiE/EVFHMUNRhpwx6e/VN+9fnHdU3Kbcbi4lFvJUMoGbpRSlK++pO6W+ygrvlSEQJpozS7XrbsGeH64fvEF0c+HSex8YUShhx7o42y+lj1jOfEhNSJClpREIiFqUZoEO7g+zudDQ2wFWkyQiBFKpQoiIJOpBr8aLWa6ZJUrt9t2L52pDiGSTShEiaEFt02Lh/T39VJejaED3BL1CeWgOjGAJbV32Nu+4uQlJDrh+MawyjcZwmRJhM5g2qhiCDYI40GsA4RG/fpVyzIdRmBKLPh9OWOI6zWikS/N4E8+4hzjfCOI0pfB8/8p713H9ouw1TqQeCWS98g1BKB2fvaG8q1zPQB+Th/BtN91tB18Rp09R/2CGbn82i8QGOKRQP5fCcTqdUKuWWs4KWjD5mVdE790lmZVpO/8v54HtUKoVwAgVHzFMDEyM/+wCwOmxAakCFymc3q194FQe+Y9XrAY4xJrT0ev29e/cSEhK4Au7y5csMBUxMTGRVg2LpGmlGlqXsdP+lr8j2ZlokghGHwkjECcR/cAymiWi3eyDtYbcjSqX8t6uUK9dJM+aF0+sBJqRLSko2bHhozM+aNeuLL77gZClJeXn55s2bbTbbcAlUe/Pmzfj4+LByG632G5W2qkrng+8Qm5Wy22mXa0DpPGwAxAe0A1QjlWESCT5uvGzOfEnmk6Cw4Q+XAMAZjUZAqq2tzbcwJSVl7969UC6RSMKYuxGJRBaL5cKFC1AJY7LmmWeeKSsr+3mpSJdL3+Gsr3U1fAeeB9AfZbVAJIDJVYhEgkapRZNTJekziMQJ/s4Kl8CBFBYW7tu3z78cUFMqleEBB/0x4oUVFRWLFi3i1gSDf0eTbhysB+cSeElAX1/ftGnTHoGT8corr4y19XG1tbWxsbG8opaXl2cHVhp7KzLr6urmzZvHn66BXo/Npawg4MS98847HC53BpOXm5tbXFwcoWuAUVZby0E1rl692tzc3NHR0d7eDp4XymZWHcwoWJWkpCQY+1OnTs3KykIiVtgBJ0hE5uME4ATgfsXCLh9nNpurqqpaW1s9xgHHcVbGwWOP4uLiIJhPTU2dP39+2OkWMFC3b99uamoyGAzd3d3+GaqgZgpuPXHiRJ1OB67CjBkzOI4chgWiwKKiounTp3PYaXPnzj106BBbPwBi5/z8fDDNXDVDpVI9//zzlZWVvDjAoB086fzq1asBixCbW1payiFkjCC6oKAgwkKuxx9/HIZbKCv8+Waubdu2cQMceLzcDs/RZMWKFYFbcvfuXW7zz6PJBx98wEHkMFpaSaFQhJ2PM5lMI1548uTJLVu2jMblq1atOn/+vP+hqKgosFFsN0d5bBrYOv9DYrH4/v37U6ZM4TiRmZaWBlwAZiiM5gZOZC5cuJCRTB+Wb775JjubOZOybNmy1157DSwjEvIsjy9wIPCAp06dOnLkCOPoG2+88dZbb4VvVf05BXAEX4STILmsrIyxZxh0B6zQiCe//vrrjJZs3LiRq3AdvAVG5ZmZmdCp4XPcm2++yajx3LlzHCYYXn75Zf/ROuKZS5cu9T0tJiaGqy1lHgHHyLf++Pj4oPUHihwY+wbBcZ05cyaHNOyfKHc4HP6nASF2dXX5lixYsICrLWUeycnJYQxku90efshltVoZrBm0OnYTAn7ENGIAAGgCGTFmPLi1pIypNQzD/DdHsQCOcTH0fBjWIHDcEyKRM1YQhHgh5y2JvCAf5WkTko+FFLIjQlpJAE4AThABOAE4ATgBOAE4QQTgBOAE4ATgBOAEGXvA8b0WLYwdQ4EuYKT3CIIImhdlJaFvSWKUi0Z5wUDYEka+LxBwKpXK96PFYuEWuBB7XiKRaDQa3xJuM/ggjDkNclDCB46xg8ZsNt+6dYvD5lZUVDAUcMQtSYBmXFycb8nly5cbGhp4bUl0dHRw+mD1qseWlhaeXvWYlJQEPT/iyXv27GG0ZOXKlU6nk5OW7Nq1i1F5Xl7ez1oCYTKZPDPQvoW+Lxd1uVxsRyKwSUdHR3l5+aFDhxjDYePGjcXFxSNeeO3aNbgjo/Dpp59+6aWXMjMzoQPYzrZ4VvaB2p44ceLjj5nvLzl48OD27duD0GJgg1VUVLR7927/coVCIZVK2a4d8Sw86OnpGfHCGzduAAqjXbtmzZozZ874l0P/hbd2xLMEwv9QQkJCdXW1TqcLf6h6tjfMnj37ETgcO3fuDNyS+vp6xv5ZnqSkpISzV3ZPmDCB17auXbs2lLaePXuWc0eEIYWFhVyuyGxqavJ/gypXkp+fHzqRX7x4cfLkyXw0A9SZ1bpadl9LAMOWq68lABJZvnx5GKt4Ojs7CwoK0tLSuIIsOTn5xRdfrKmp4XFLEuL9IgygVb1eH8YXYQDuwL5arRas5GOPPRb201qtVnC+GhsbwfQbDAaPvQ49gIOWawcFfKCcnByGnxiSeRG2JAnZEQE4ATgBOEEE4ATgBOAE4H5N8n8BBgDPwNJddRftDwAAAABJRU5ErkJggg=="
                      alt
                    />
                    <p class="title" style="color: rgb(252, 108, 108);">分类训练集(这里跳转新建事件提取)</p>
                    <p class="text">创建用户想要的训练集，在训练集中添加不同的分类，在每个分类中可以添加一条或者多条不同的文本参与分类。</p>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="el-col el-col-6">
          <div>
            <router-link to="TransMenu">
            <div class="el-card grid grid4 is-always-shadow">
              <div class="el-card__header">
                <div class="header header3"></div>
              </div>
              <div class="el-card__body">
                <div class="body">
                  <img src="/static/img/logic.7f597f0.png" alt />
                  <p class="title" style="color: rgb(252, 108, 108);">Cameo字典翻译</p>
                  <p class="text">用户可以自行分类翻译获取Cameo字典，以防默认字典存在翻译不全的问题。</p>
                </div>
              </div>
            </div>
            </router-link>
          </div>
        </div>
        <div class="el-col el-col-6">
          <div>
            <div class="el-card grid grid4 is-always-shadow">
              <div class="el-card__header">
                <div class="header header3"></div>
              </div>
              <div class="el-card__body">
                <div class="body">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGgAAABoCAIAAACSfiL2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzc2ODE2Q0I0MjkwMTFFOUI5RTdGQTNDNDBGM0JGQTgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzc2ODE2Q0M0MjkwMTFFOUI5RTdGQTNDNDBGM0JGQTgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDNzY4MTZDOTQyOTAxMUU5QjlFN0ZBM0M0MEYzQkZBOCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDNzY4MTZDQTQyOTAxMUU5QjlFN0ZBM0M0MEYzQkZBOCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PolZvNMAABKkSURBVHja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"
                    alt
                  />
                  <p class="title" style="color: rgb(252, 108, 108);">情感词典</p>
                  <p class="text">创建用户想要的情感词典，在不同的词典中可以归类不同的词汇，而且可以定义每一个词汇的分数。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <footer class="el-footer" style="height: 60px;">
      <div data-v-4e9c2f90 class="footer">
        <div data-v-4e9c2f90 class="links">
          <a data-v-4e9c2f90 href="#">关于我们</a>
          <a data-v-4e9c2f90 href="#">服务协议</a>
          <a data-v-4e9c2f90>隐私政策</a>
        </div>
        <div data-v-4e9c2f90 class="copyright">
          Copyright © 2019 上海萌泰数据科技股份有限公司 © 版权所有.
          <a
            data-v-4e9c2f90
            href=" http://beian.miit.gov.cn"
            target="_blank"
            style="color: rgb(73, 49, 133);"
          >沪 ICP 备 09099644 号</a>
        </div>
      </div>
    </footer>
  </section>
</template>

<script>
export default {
  name: "AnalysisMenu",
  data() {
    return {};
  }
};
</script>

<style scoped>
body,
html {
  font-size: 14px;
}
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.el-main {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: auto;
  padding: 0 !important;
  box-sizing: border-box;
  display: block;
  flex: 1;
  flex-basis: auto;
}
.el-main .wrapper-grids {
  width: 1200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -55%);
}
.el-main .wrapper-grids .grid .header {
  height: 20px;
}
.el-row {
  position: relative;
  box-sizing: border-box;
}
.container-settingHome .el-main .wrapper-grids .el-col-6 {
  width: 25%;
}
* {
  box-sizing: border-box;
}
.el-main .wrapper-grids .grid .el-card__header {
  padding: 0;
  /* text-shadow: 0 0 black; */
}
.el-main .wrapper-grids .grid .header1,
.el-main .wrapper-grids .grid .header2,
.el-main .wrapper-grids .grid .header3,
.el-main .wrapper-grids .grid .header4 {
  background: #fc6c6c;
}
.el-main .wrapper-grids .grid .body img {
  margin: 0 auto;
  display: block;
}
.el-main .wrapper-grids .grid .body .title {
  text-align: center;
  margin: 5px 0 10px;
}
.el-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
.el-card__body {
  padding: 20px;
}
.el-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.grid1,
.grid2,
.grid3,
.grid4 {
  margin-right: 8% !important;
}
div {
  display: block;
}
</style>
