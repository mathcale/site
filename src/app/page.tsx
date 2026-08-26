import { Fragment } from 'react';

import { GitBranchIcon, NodeIcon } from './icons';

import { career, profile, profileLinks } from './data';

export default function IndexPage() {
  let line = 0;

  const revealDelay = (step = 1) => {
    const style = {
      '--reveal-delay': `${line * 30}ms`,
    } as React.CSSProperties;

    line += step;

    return style;
  };

  return (
    <section className="shell">
      <div className="prompt">
        <p className="reveal" style={revealDelay()}>
          <span className="prompt__dirname">site</span> on{' '}
          <span className="prompt__branch">
            <GitBranchIcon /> main
          </span>{' '}
          <span className="prompt__git-status">[!?]</span> is{' '}
          <span className="prompt__package">📦 v7.0.0</span> via{' '}
          <span className="prompt__runtime">
            <NodeIcon /> v24.19.0
          </span>
        </p>

        <p className="reveal" style={revealDelay()}>
          <span className="prompt__symbol">→</span>
          profile.sh
        </p>
      </div>

      <div className="output">
        <p className="reveal" style={revealDelay()}>
          ###############
        </p>
        <p className="reveal" style={revealDelay()}>
          ### PROFILE ###
        </p>
        <p className="reveal" style={revealDelay()}>
          ###############
        </p>
        <br />

        <ul>
          {profile.map((p, i) => (
            <li key={i} className="reveal" style={revealDelay()}>
              <span className="bold">{p.title}:</span> {p.value}
            </li>
          ))}

          <li className="reveal" style={revealDelay()}>
            <span className="bold">Links:</span>

            <ul className="output__links">
              {profileLinks.map((link, i) => (
                <li key={i} className="reveal" style={revealDelay()}>
                  <a href={link.href} target="_blank">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>

        <br />

        <p className="reveal" style={revealDelay()}>
          ##############
        </p>
        <p className="reveal" style={revealDelay()}>
          ### CAREER ###
        </p>
        <p className="reveal" style={revealDelay()}>
          ##############
        </p>
        <br />

        <ul>
          {career.map((c, index) => (
            <Fragment key={index}>
              <li className="reveal" style={revealDelay()}>
                <span className="bold">Company:</span> {c.company}
              </li>

              <li className="reveal" style={revealDelay()}>
                <span className="bold">Role:</span> {c.role}
              </li>

              <li className="reveal" style={revealDelay()}>
                <span className="bold">Period:</span> {c.from} - {c.to}
              </li>

              <li className="reveal" style={revealDelay()}>
                <span className="bold">Description:</span> {c.description}
              </li>

              {c.stack && (
                <li className="reveal" style={revealDelay()}>
                  <span className="bold">Stack:</span> {c.stack.join(', ')}
                </li>
              )}

              {index !== career.length - 1 && <br />}
            </Fragment>
          ))}
        </ul>

        <div className="cursor"></div>
      </div>
    </section>
  );
}
