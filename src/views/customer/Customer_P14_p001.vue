<script>
// Customer_P14_p001
import { onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import PageHeadRow from '@/components/ui/text/PageHeadRow.vue';
import PageMainText from '@/components/ui/text/PageMainText.vue';
import StepProgress from '@/components/ui/progress/StepProgress.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';
import CheckBox from '@/components/ui/form/CheckBox.vue';
import CheckBoxLabelText from '@/components/ui/form/CheckBoxLabelText.vue';
import CheckBoxObject from '@/components/ui/form/CheckBoxObject.vue';
import UiScroller from '@/components/ui/common/UiScroller.vue';
import BasicHr from '@/components/ui/common/BasicHr.vue';

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    PageHeadRow,
    StepProgress,
    PageMainText,
    BasicButton,
    ButtonList,
    ButtonListItem,
    CheckBox,
    CheckBoxLabelText,
    CheckBoxObject,
    UiScroller,
    BasicHr,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
      store.ui.header.setDepthActive(() => 'customer005');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });
  },
};
</script>

<template>
  <PageContents>
    <template v-slot:head>
      <LocationBar
        :data="[
          {
            text: '홈',
            to: '/main/home',
          },
          {
            text: '고객센터',
            to: '/',
          },
          {
            text: '개인정보 열람 청구',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageHeadRow>
        <PageTitle align="left">개인정보 열람 청구</PageTitle>
        <template v-slot:right>
          <StepProgress :total="3" :current="1" />
        </template>
      </PageHeadRow>
      <PageMainText align="left">
        개인정보 열람 청구를 위해<br />
        약관동의 및 본인확인이 필요합니다
      </PageMainText>
    </PageHead>

    <div :class="$style['agree-box']">
      <div :class="$style['agree-box__block']">
        <div :class="$style['agree-box__head']">
          <CheckBox id="Customer_P14_p001_agree" theme="tertiary">
            <CheckBoxObject />
            <CheckBoxLabelText>개인정보 수집·이용 동의</CheckBoxLabelText>
          </CheckBox>
        </div>
        <div :class="$style['agree-box__contents']">
          <UiScroller :classNames="{ wrap: $style['agree-box__scroller'] }">
            <section :class="$style['agree-box__data']">
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
              // 약관 상세 노출 (관리자 등록)<br />
            </section>
          </UiScroller>
        </div>
      </div>
    </div>

    <!-- Case : 다음 누른 후 비노출 -->
    <div class="row-margin-block row-margin-bottom-none">
      <ButtonList
        :classNames="{
          wrap: 'row-margin-block',
        }"
      >
        <ButtonListItem>
          <BasicButton>다음</BasicButton>
        </ButtonListItem>
      </ButtonList>

      <BasicHr theme="tertiary" className="row-margin-container-medium" />

      <div :class="$style['logs-wrap']">
        <ul :class="$style['logs']">
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--tertiary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-3']">
                    개인정보 열람 청구
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink to="" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li :class="$style['logs__item']">
            <div
              :class="[$style['logs__block'], $style['logs__block--tertiary']]"
            >
              <div :class="$style['logs__row']">
                <div :class="$style['logs__contents']">
                  <h3 :class="[$style['logs__title'], 'text-body-3']">
                    정보 이용·제공 조회
                  </h3>
                </div>
                <div :class="$style['logs__right']">
                  <RouterLink to="" :class="$style['logs__link']">
                    <span :class="$style['logs__link-text']">상세보기</span>
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- // Case : 다음 누른 후 비노출 -->

    <!-- Case : 다음 누른 후 노출 -->
    <div class="row-margin-block-small row-margin-bottom-none">
      // [공통 > 본인인증] 내용 노출
    </div>

    <ButtonList>
      <ButtonListItem>
        <BasicButton>다음</BasicButton>
      </ButtonListItem>
    </ButtonList>
    <!-- // Case : 다음 누른 후 노출 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P14_p001.scss';
</style>
