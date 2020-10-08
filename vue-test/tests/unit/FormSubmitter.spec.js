import { shallowMount } from "@vue/test-utils"
import FormSubmitter from "@/components/FormSubmitter.vue"
import flushPromises from "flush-promises"

let url = '';
let data = '';

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve) => {
      url = _url;
      data = _data;
      resolve();
    })
  }
}

describe("FormSubmitter", () => {
  it("フォームを更新するとお知らせを表示", async () => {
    const wrapper = shallowMount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    })

    wrapper.find("[data-username]").setValue("alice")
    wrapper.find("form").trigger("submit.prevent")

    await flushPromises()
    console.log(wrapper.html())

    expect(wrapper.find(".message").text())
      .toBe("aliceさん、お問い合わせ、ありがとうございます。")
  })
})