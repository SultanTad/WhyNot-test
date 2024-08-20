<script setup>
import { ref } from "vue";
import { useNavElementsStore } from "../store/NavElments";

const activeBurger = ref(false);
const activeMenu = ref(false);

const activeBurgerMenu = () => {
  activeBurger.value = !activeBurger.value;
  activeMenu.value = !activeMenu.value;
};

const navElements = useNavElementsStore();
</script>
<template>
  <header class="header">
    <div class="top__panel">
      <div class="container top__panel-inner">
        <img class="logo" src="../assets/Logo+nav.svg" alt="logo" />
        <div class="geolocation-notification-panel">
          <div class="geolocation">
            <img
              class="geo-icon"
              src="../assets/Search Copy.svg"
              alt="geo-icon"
            />
            <p class="city-name">Москва и область</p>
          </div>
          <img
            class="notification-icon"
            src="../assets/Inbox-icon.svg"
            alt="notification-icon"
          />
          <div
            class="burger"
            :class="{ activeBurger: activeBurger }"
            @click="activeBurgerMenu"
          >
            <span></span>
          </div>
        </div>
      </div>
    </div>
    <nav class="nav">
      <div class="container">
        <ul class="nav__list">
          <li
            class="nav__item"
            v-for="item in navElements.elements"
            :key="item"
          >
            <a class="nav__item-link" :href="item.link">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="menu__mobile" :class="{ activeMenu: activeMenu }">
      <ul class="menu__mobile-list">
        <li
          class="menu__mobile-item"
          v-for="item in navElements.elements"
          :key="item"
        >
          <a :href="item.link" class="menu__mobile-link">{{ item.title }}</a>
        </li>
      </ul>

      <div class="menu__mobile-footer">
        <img
          class="geo-icon"
          src="../assets/footer-location.svg"
          alt="geo-icon"
        />
        <p class="city-name">Москва и область</p>
      </div>
    </div>
  </header>
</template>

<style>
.nav {
  height: 47px;
}
.top__panel {
  background-color: #1f2229;
  display: flex;
  align-items: center;
  height: 40px;
}
.top__panel-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.geolocation-notification-panel {
  display: flex;
  align-items: center;
}

.geolocation {
  display: flex;
  align-items: center;
  margin-right: 32px;
}

.city-name {
  color: #7c8792;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
}

.burger {
  display: none;
  margin-left: 18px;
  position: relative;
  z-index: 50;
  align-items: center;
  justify-content: flex-end;
  width: 18px;
  height: 14px;
}

.burger span {
  height: 2px;
  width: 100%;
  background-color: #fff;
  transform: scale(1);
}

.burger::before,
.burger::after {
  content: "";
  position: absolute;
  height: 1.5px;
  width: 100%;
  background-color: #fff;
  transition: all 0.3s ease 0s;
}

.burger::before {
  top: 0;
}
.burger::after {
  bottom: 0;
}

.burger.activeBurger span {
  transform: scale(0);
}

.burger.activeBurger::before {
  top: 50%;
  transform: rotate(-45deg) translate(0, -50%);
}

.burger.activeBurger::after {
  bottom: 50%;
  transform: rotate(45deg) translate(0, 50%);
}

.nav__list {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 0 18px;
  padding-top: 15px;
}

.nav__item-link {
  color: #7c8792;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  position: relative;
}

.menu__mobile {
  display: flex;
  transform: translateX(-100%);
  transition: all 0.5s;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  margin-top: 40px;
  height: 100vh;
}

.menu__mobile-list {
  padding-top: 24px;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  gap: 16px 0;
  position: relative;
}

.menu__mobile-link {
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
  color: #959597;
  position: relative;
  width: 100%;
  display: block;
}

.menu__mobile-link::before {
  content: "";
  position: absolute;
  top: 0;
  border-bottom: 1px solid #ededed;
  width: 100%;
  bottom: -8px;
}

.menu__mobile-footer {
  position: absolute;
  bottom: 40px;
  background: #f3f5f6;
  width: 100%;
  display: flex;
  align-items: center;
  height: 56px;
  gap: 0 4px;
  padding: 16px 0 16px 15px;
}

.menu__mobile-footer .city-name {
  color: #959597;
}

@media (min-width: 1000px) {
  .nav__item-link:hover {
    color: #1f2229;
  }

  .nav__item-link:hover::before {
    content: "";
    position: absolute;
    top: 0;
    border-bottom: 2px solid #1f2229;
    width: 100%;
    bottom: -12px;
  }
}

@media (max-width: 875px) {
  .nav,
  .geolocation {
    display: none;
  }

  .burger {
    display: flex;
  }

  .menu__mobile.activeMenu {
    transform: translateX(0);
    transition: all 0.5s;
  }
}
</style>
