/* Copyright [2024] [Dynatrace]
	 Licensed under the Apache License, Version 2.0 (the "License");
	 you may not use this file except in compliance with the License.
	 You may obtain a copy of the License at

		 http://www.apache.org/licenses/LICENSE-2.0

	 Unless required by applicable law or agreed to in writing, software
	 distributed under the License is distributed on an "AS IS" BASIS,
	 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 See the License for the specific language governing permissions and
	 limitations under the License.*/

module.exports = {
  root: true,
  plugins: ['header'],
  rules: {
    'header/header': [
      2,
      'block',
      [
        {
          pattern: ' Copyright \\[\\d{4}\\] \\[\\S+\\]',
          template: ' Copyright [2024] [Dynatrace]',
        },
        '\t Licensed under the Apache License, Version 2.0 (the "License");',
        '\t you may not use this file except in compliance with the License.',
        '\t You may obtain a copy of the License at',
        '',
        '\t\t http://www.apache.org/licenses/LICENSE-2.0',
        '',
        '\t Unless required by applicable law or agreed to in writing, software',
        '\t distributed under the License is distributed on an "AS IS" BASIS,',
        '\t WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.',
        '\t See the License for the specific language governing permissions and',
        '\t limitations under the License.',
      ],
      2,
    ],
  },
};
