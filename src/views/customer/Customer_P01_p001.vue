<script>
// Customer_P01_p001
import { reactive, onMounted, onUnmounted } from 'vue';

import { useUiHeaderStore } from '@/stores/ui/header';

import PageContents from '@/components/ui/layout/PageContents.vue';
import LocationBar from '@/components/ui/layout/LocationBar.vue';
import PageHead from '@/components/ui/text/PageHead.vue';
import PageTitle from '@/components/ui/text/PageTitle.vue';
import InputBlock from '@/components/ui/form/InputBlock.vue';
import InputBlockCell from '@/components/ui/form/InputBlockCell.vue';
import BasicInput from '@/components/ui/form/BasicInput.vue';
import BasicSelect from '@/components/ui/form/BasicSelect.vue';
import SearchButton from '@/components/ui/button/SearchButton.vue';
import PaginationNav from '@/components/ui/pagination/PaginationNav.vue';
import PaginationNavArrow from '@/components/ui/pagination/PaginationNavArrow.vue';
import PaginationNavEllipsis from '@/components/ui/pagination/PaginationNavEllipsis.vue';
import PaginationNavNumber from '@/components/ui/pagination/PaginationNavNumber.vue';
import FilterTab from '@/components/ui/tab/FilterTab.vue';
import FilterTabButton from '@/components/ui/tab/FilterTabButton.vue';
import SubTab from '@/components/ui/tab/SubTab.vue';
import SubTabButton from '@/components/ui/tab/SubTabButton.vue';
import UiAccordion from '@/components/ui/accordion/UiAccordion.vue';
import UiAccordionItem from '@/components/ui/accordion/UiAccordionItem.vue';
import UiAccordionLayer from '@/components/ui/accordion/UiAccordionLayer.vue';
import UiAccordionOpener from '@/components/ui/accordion/UiAccordionOpener.vue';
import TextButton from '@/components/ui/button/TextButton.vue';
import BasicButton from '@/components/ui/button/BasicButton.vue';
import ButtonList from '@/components/ui/button/ButtonList.vue';
import ButtonListItem from '@/components/ui/button/ButtonListItem.vue';

import IconRightArrow from '@/assets/images/icon/right-arrow.svg?component';

const dummyData = () => [
  {
    name: '금융상품',
    depth: [
      {
        name: '자동차금융',
      },
      {
        name: '개인금융',
      },
      {
        name: '기업금융',
      },
    ],
  },
  {
    name: '고객서비스',
    depth: [
      {
        name: '결제/입금',
      },
      {
        name: '승계/연장',
      },
      {
        name: '온라인 약정',
      },
      {
        name: '금리인하요구',
      },
    ],
  },
  {
    name: '홈페이지이용',
    depth: [
      {
        name: '본인인증',
      },
      {
        name: '서류발급',
      },
      {
        name: '회원가입',
      },
      {
        name: '아이핀',
      },
    ],
  },
  {
    name: '기타',
    depth: [
      {
        name: '채용관련',
      },
    ],
  },
];

export default {
  components: {
    PageContents,
    LocationBar,
    PageHead,
    PageTitle,
    InputBlock,
    InputBlockCell,
    BasicInput,
    BasicSelect,
    SearchButton,
    PaginationNav,
    PaginationNavArrow,
    PaginationNavEllipsis,
    PaginationNavNumber,
    FilterTab,
    FilterTabButton,
    SubTab,
    SubTabButton,
    UiAccordion,
    UiAccordionItem,
    UiAccordionLayer,
    UiAccordionOpener,
    BasicButton,
    ButtonList,
    ButtonListItem,
    TextButton,
    IconRightArrow,
  },
  setup() {
    const store = {
      ui: {
        header: useUiHeaderStore(),
      },
    };

    const state = reactive({
      data: dummyData(),
      active: 0,
      activeDepth: 0,
    });

    const setPage = (i = 0, j = 0) => {
      state.active = i;
      state.activeDepth = j;
    };

    onMounted(() => {
      store.ui.header.setActive(() => 'customer');
      store.ui.header.setDepthActive(() => 'customer001');
    });

    onUnmounted(() => {
      store.ui.header.setActive();
      store.ui.header.setDepthActive();
    });

    return {
      state,
      setPage,
    };
  },
};
</script>

<template>
  <PageContents size="wide">
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
            text: 'FAQ',
            to: '/',
          },
        ]"
      />
    </template>

    <PageHead>
      <PageTitle>FAQ</PageTitle>
    </PageHead>

    <div :class="$style['board-search-bar']">
      <InputBlock>
        <InputBlockCell>
          <BasicSelect
            :options="[
              {
                value: '1',
                label: '전체',
              },
              {
                value: '2',
                label: '제목',
              },
              {
                value: '3',
                label: '내용',
              },
            ]"
            title="검색 조건 선택"
            defaultValue="1"
            :classNames="{
              wrap: 'input-width-category',
            }"
          />
        </InputBlockCell>
        <InputBlockCell :flexible="true" margin="regular">
          <BasicInput
            type="search"
            title="게시물 검색어"
            placeholder="검색어 입력"
          />
        </InputBlockCell>
        <InputBlockCell type="search">
          <SearchButton />
        </InputBlockCell>
      </InputBlock>
    </div>

    <!-- Case : 검색 결과 없을 경우 -->
    <div :class="[$style['empty'], $style['empty--secondary']]">
      <p :class="$style['empty__text']">검색된 결과가 없습니다.</p>
    </div>
    <!-- // Case : 검색 결과 없을 경우 -->

    <!-- Case : 결과 있을 경우 -->
    <div>
      <div class="row-margin-container-medium">
        <FilterTab :classNames="{ wrap: $style['nav'] }">
          <FilterTabButton
            tagName="button"
            type="button"
            :active="state.active === 0"
            @click="setPage(0)"
          >
            전체
          </FilterTabButton>
          <FilterTabButton
            v-for="(item, i) in state.data"
            :key="i"
            tagName="button"
            type="button"
            :active="state.active === i + 1"
            @click="setPage(i + 1)"
          >
            {{ item.name }}
          </FilterTabButton>
        </FilterTab>

        <SubTab
          v-if="state.active > 0"
          :classNames="{ wrap: $style['category'] }"
        >
          <SubTabButton
            v-for="(item, i) in state.data[state.active - 1].depth"
            :key="i"
            tagName="button"
            type="button"
            :active="state.activeDepth === i"
            @click="setPage(state.active, i)"
          >
            {{ item.name }}
          </SubTabButton>
        </SubTab>
      </div>

      <div :class="$style['qna']">
        <UiAccordion :classNames="{ wrap: $style['qna__list'] }">
          <UiAccordionItem
            v-for="i in 10"
            :key="i"
            :classNames="{ item: $style['qna__item'] }"
          >
            <div :class="$style['qna__head']">
              <div :class="$style['qna__symbol']">Q</div>
              <div :class="$style['qna__cell']">
                <h3 :class="$style['qna__title']">
                  [신차할부(오토론)] 신차할부 오토론이란?
                </h3>
              </div>
              <div :class="$style['qna__right']">
                <UiAccordionOpener
                  :classNames="{ button: $style['qna__opener'] }"
                />
              </div>
            </div>

            <UiAccordionLayer :classNames="{ layer: $style['qna__layer'] }">
              <div :class="$style['qna__answer']">
                <div
                  :class="[
                    $style['qna__symbol'],
                    $style['qna__symbol--answer'],
                  ]"
                >
                  A
                </div>
                <div :class="$style['qna__cell']">
                  <section :class="$style['qna__contents']">
                    // 내용 노출<br />
                    차량을 구매할 목적으로 당사에서 대출 받고, 일정기간 동안
                    원금과 이자가 포함된 원리금을 매월 일정하게 납부하는 대출
                    상품입니다

                    <!-- Case : 버튼 1개일 경우 -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton tagName="RouterLink" to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!--  // Case : 버튼 1개일 경우 -->

                    <!-- Case : 버튼 2개일 경우 -->
                    <ButtonList
                      col="4"
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton tagName="RouterLink" to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                      <ButtonListItem>
                        <BasicButton tagName="RouterLink" to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 2개일 경우 -->

                    <!-- Case : 버튼 3개일 경우 -->
                    <ButtonList
                      col="4"
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton tagName="RouterLink" to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                      <ButtonListItem>
                        <BasicButton tagName="RouterLink" to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                      <ButtonListItem>
                        <BasicButton tagName="RouterLink" to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 3개일 경우 -->

                    <!-- Case : 버튼 컬러 타입 #143B75 -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton theme="tertiary">버튼</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 컬러 타입 #143B75 -->

                    <!-- Case : 버튼 컬러 타입 #3A81E0  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton theme="secondary">버튼</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 컬러 타입 #3A81E0 -->

                    <!-- Case : 버튼 컬러 타입 #EAEAEA  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton theme="quaternary">버튼</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 컬러 타입 #EAEAEA  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton theme="quaternary-green">버튼</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #00A69E  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #3A81E0  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton theme="quaternary-blue">버튼</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #3A81E0  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #143B75  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton theme="quaternary-navy">버튼</BasicButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #143B75  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #00A69E  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton
                          :line="true"
                          theme="quaternary-green"
                          tagName="RouterLink"
                          to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #00A69E  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #3A81E0  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton
                          :line="true"
                          theme="quaternary-blue"
                          tagName="RouterLink"
                          to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #3A81E0  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #757575  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton
                          :line="true"
                          theme="quaternary"
                          tagName="RouterLink"
                          to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #757575  -->

                    <!-- Case : 버튼 텍스트 컬러 타입 #143B75  -->
                    <ButtonList
                      :wrap="true"
                      align="center"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <BasicButton
                          :line="true"
                          theme="quaternary-navy"
                          tagName="RouterLink"
                          to=""
                          >버튼</BasicButton
                        >
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 텍스트 컬러 타입 #143B75  -->

                    <!-- Case : 버튼 1개일 경우 -->
                    <ButtonList
                      :wrap="true"
                      align="left"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <TextButton theme="secondary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 1개일 경우 -->

                    <!-- Case : 버튼 2개일 경우 -->
                    <ButtonList
                      col="2"
                      :wrap="true"
                      align="left"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <TextButton theme="secondary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                      <ButtonListItem>
                        <TextButton theme="secondary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 2개일 경우 -->

                    <!-- Case : 버튼 3개일 경우 -->
                    <ButtonList
                      col="3"
                      :wrap="true"
                      align="left"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <TextButton theme="secondary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                      <ButtonListItem>
                        <TextButton theme="secondary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                      <ButtonListItem>
                        <TextButton theme="secondary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 3개일 경우 -->

                    <!-- Case : 버튼 컬러 타입 #3A81E0 -->
                    <ButtonList
                      :wrap="true"
                      align="left"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <TextButton theme="tertiary" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 컬러 타입 #3A81E0 -->

                    <!-- Case : 버튼 컬러 타입 #757575 -->
                    <ButtonList
                      :wrap="true"
                      align="left"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <TextButton
                          class="color-gray-tertiary"
                          :iconFillAll="true"
                        >
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 컬러 타입 #757575 -->

                    <!-- Case : 버튼 컬러 타입 #143B75  -->
                    <ButtonList
                      :wrap="true"
                      align="left"
                      :classNames="{
                        wrap: 'row-margin-container-medium',
                      }"
                    >
                      <ButtonListItem>
                        <TextButton class="color-navy" :iconFillAll="true">
                          <template v-slot:rightIcon>
                            <IconRightArrow />
                          </template>
                          버튼
                        </TextButton>
                      </ButtonListItem>
                    </ButtonList>
                    <!-- // Case : 버튼 컬러 타입 #143B75  -->
                  </section>
                </div>
              </div>
            </UiAccordionLayer>
          </UiAccordionItem>
        </UiAccordion>
      </div>

      <!-- Case : 첫번째 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" :disabled="true" />
        <PaginationNavNumber :active="true">1</PaginationNavNumber>
        <PaginationNavNumber>2</PaginationNavNumber>
        <PaginationNavNumber>3</PaginationNavNumber>
        <PaginationNavNumber>4</PaginationNavNumber>
        <PaginationNavNumber>5</PaginationNavNumber>
        <PaginationNavNumber>6</PaginationNavNumber>
        <PaginationNavNumber>7</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>999</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 첫번째 페이지일 때 -->

      <!-- Case : 중간 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>13</PaginationNavNumber>
        <PaginationNavNumber>14</PaginationNavNumber>
        <PaginationNavNumber :active="true">15</PaginationNavNumber>
        <PaginationNavNumber>16</PaginationNavNumber>
        <PaginationNavNumber>17</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>99</PaginationNavNumber>
        <PaginationNavArrow type="next" />
      </PaginationNav>
      <!-- // Case : 중간 페이지일 때 -->

      <!-- Case : 마지막 페이지일 때 -->
      <PaginationNav>
        <PaginationNavArrow type="prev" />
        <PaginationNavNumber>1</PaginationNavNumber>
        <PaginationNavEllipsis />
        <PaginationNavNumber>93</PaginationNavNumber>
        <PaginationNavNumber>94</PaginationNavNumber>
        <PaginationNavNumber>95</PaginationNavNumber>
        <PaginationNavNumber>96</PaginationNavNumber>
        <PaginationNavNumber>97</PaginationNavNumber>
        <PaginationNavNumber>98</PaginationNavNumber>
        <PaginationNavNumber :active="true">99</PaginationNavNumber>
        <PaginationNavArrow type="next" :disabled="true" />
      </PaginationNav>
      <!-- // Case : 마지막 페이지일 때 -->
    </div>
    <!-- // Case : 결과 있을 경우 -->
  </PageContents>
</template>

<style lang="scss" module>
@import '@/assets/scss/views/customer/Customer_P01_p001.scss';
</style>
